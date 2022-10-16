import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/providers';
import { UtilsService } from 'src/utils';

import { InvalidCredentials, AccessDenied } from '../exceptions';
import { loginDto } from '../dtos';
import { createUserDto } from 'src/modules/user/dtos';

import { AT_CONFIG, RT_CONFIG } from 'src/common/constants';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UserService,
    private _jwtService: JwtService,
    private _configService: ConfigService,
  ) {}

  async register(data: createUserDto) {
    const user = await this._userService.create(data);
    const tokens = await this.generateToken(user);
    await this.updateHashRT(user.id, tokens.refresh_token);

    return tokens;
  }

  async login(data: loginDto) {
    const user = await this.validateUser(data);
    const tokens = await this.generateToken(user);
    await this.updateHashRT(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string) {
    await this._userService.update(userId, { refresh_token: null });
  }

  async validateUser(data: loginDto) {
    const { email, password } = data;
    const user = await this._userService.findByEmail(email);
    if (!user || !(await UtilsService.compareHash(password, user.password))) {
      throw new InvalidCredentials();
    }

    return user;
  }

  async generateToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };

    const [at, rt] = await Promise.all([
      this._jwtService.signAsync(payload, this._configService.get(AT_CONFIG)),
      this._jwtService.signAsync(payload, this._configService.get(RT_CONFIG)),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async refreshTokens(userId: string, rt: string) {
    const user = await this._userService.findById(userId);
    if (!user || !(await UtilsService.compareHash(rt, user.refresh_token)))
      throw new AccessDenied();

    const tokens = await this.generateToken(user);
    return tokens;
  }

  async updateHashRT(userId: string, rt: string) {
    const hashRT = await UtilsService.hash(rt);
    await this._userService.update(userId, { refresh_token: hashRT });
  }
}

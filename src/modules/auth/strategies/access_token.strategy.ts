import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AT_SECRET, JWT } from 'src/common/constants';

type JwtPayload = {
  sub: string;
  role: string;
};

@Injectable()
export class ATStrategy extends PassportStrategy(Strategy, JWT) {
  constructor(public configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(AT_SECRET),
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}

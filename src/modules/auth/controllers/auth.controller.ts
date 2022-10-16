import {
  Controller,
  Post,
  UseGuards,
  Req,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RefreshTokenGuard } from 'src/guards';
import { Public } from 'src/decorators';
import { AuthService } from '../providers/auth.service';
import { createUserDto } from 'src/modules/user/dtos';
import { loginDto } from '../dtos';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() data: loginDto) {
    return this._authService.login(data);
  }

  @Public()
  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() data: createUserDto) {
    return this._authService.register(data);
  }

  // @Roles(Role.ADMIN)
  @Public()
  @Post('/logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@Req() req) {
    const { user } = req;
    return this._authService.logout(user.sub);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req) {
    const { user } = req;
    return this._authService.refreshTokens(user.sub, user.refreshToken);
  }
}

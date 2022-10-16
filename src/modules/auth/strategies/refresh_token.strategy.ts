import { Request } from 'express';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

import { Strategy, ExtractJwt } from 'passport-jwt';
import { TokenMalformed } from '../exceptions';

import { RT_SECRET, JWT_REFRESH } from 'src/common/constants';

@Injectable()
export class RTStrategy extends PassportStrategy(Strategy, JWT_REFRESH) {
  constructor(public configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(RT_SECRET),
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    if (!refreshToken) throw new TokenMalformed();

    return { ...payload, refreshToken };
  }
}

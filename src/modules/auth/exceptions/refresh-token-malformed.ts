import { ForbiddenException } from '@nestjs/common';

export class TokenMalformed extends ForbiddenException {
  constructor() {
    super('Refresh token malformed');
  }
}

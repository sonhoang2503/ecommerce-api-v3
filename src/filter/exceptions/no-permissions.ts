import { ForbiddenException } from '@nestjs/common';

export class NoPerrmissionError extends ForbiddenException {
  constructor() {
    super('You dont have permission to access this route');
  }
}

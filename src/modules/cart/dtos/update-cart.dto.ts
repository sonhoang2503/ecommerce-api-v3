import { PartialType } from '@nestjs/swagger';
import { createCartDto } from './create-cart.dto';

export class updateCartDto extends PartialType(createCartDto) {}

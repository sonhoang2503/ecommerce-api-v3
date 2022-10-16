import { PartialType } from '@nestjs/swagger';
import { createOrderDto } from './create-order.dto';

export class updateOrderDto extends PartialType(createOrderDto) {}

import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';

// import { JwtAuthGuard } from 'src/guards/at.guard';

import { createOrderDto, updateOrderDto } from '../dtos';
import { OrderService } from '../providers';

@Controller('order')
export class OrderController {
  constructor(private readonly _orderService: OrderService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._orderService.find();
  }

  @Post()
  async create(@Body() data: createOrderDto) {
    console.log(data);
    return await this._orderService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._orderService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateOrderDto) {
    return await this._orderService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._orderService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._orderService.deleteAll();
  }
}

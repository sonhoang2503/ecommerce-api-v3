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

import { createCartDto, updateCartDto } from '../dtos';
import { CartService } from '../providers';

@Controller('cart')
export class CartController {
  constructor(private readonly _cartService: CartService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._cartService.find();
  }

  @Post()
  async create(@Body() data: createCartDto) {
    console.log(data);
    return await this._cartService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._cartService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateCartDto) {
    return await this._cartService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._cartService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._cartService.deleteAll();
  }
}

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

import { createProductDto, updateProductDto } from '../dtos';
import { ProductService } from '../providers';

@Controller('product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._productService.find();
  }

  @Post()
  async create(@Body() data: createProductDto) {
    console.log(data);
    return await this._productService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._productService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateProductDto) {
    return await this._productService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._productService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._productService.deleteAll();
  }
}

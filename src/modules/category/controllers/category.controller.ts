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

import { createCategoryDto, updateCategoryDto } from '../dtos';
import { CategoryService } from '../providers';

@Controller('category')
export class CategoryController {
  constructor(private readonly _categoryService: CategoryService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._categoryService.find();
  }

  @Post()
  async create(@Body() data: createCategoryDto) {
    console.log(data);
    return await this._categoryService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._categoryService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateCategoryDto) {
    return await this._categoryService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._categoryService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._categoryService.deleteAll();
  }
}

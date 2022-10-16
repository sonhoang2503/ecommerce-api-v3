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

import { createReviewDto, updateReviewDto } from '../dtos';
import { ReviewService } from '../providers';
// import { Reflector } from '@nestjs/core';

@Controller('review')
export class ReviewController {
  constructor(private readonly _reviewService: ReviewService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._reviewService.find();
  }

  @Post()
  async create(@Body() data: createReviewDto) {
    console.log(data);
    return await this._reviewService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._reviewService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateReviewDto) {
    return await this._reviewService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._reviewService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._reviewService.deleteAll();
  }
}

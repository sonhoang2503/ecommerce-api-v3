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

import { createUserDto, updateUserDto } from '../dtos';
import { UserService } from '../providers';
// import { Reflector } from '@nestjs/core';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this._userService.find();
  }

  @Post()
  async create(@Body() data: createUserDto) {
    console.log(data);
    return await this._userService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this._userService.findById(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: updateUserDto) {
    return await this._userService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this._userService.delete(id);
  }

  @Delete('/delete')
  async deleteAll() {
    return await this._userService.deleteAll();
  }
}

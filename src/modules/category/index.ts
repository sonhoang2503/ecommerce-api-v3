import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './controllers/category.controller';
import { CategoryService, CategoryRepository } from './providers';

import { Category, CategorySchema } from './models';
import { TestService } from '../product/providers';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, TestService],
})
export class CategoryModule {}

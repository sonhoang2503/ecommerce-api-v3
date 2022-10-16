import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductController } from './controllers/product.controller';
import { ProductService, ProductRepository, TestService } from './providers';

import { Product, ProductSchema } from './models';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, TestService],
})
export class ProductModule {}

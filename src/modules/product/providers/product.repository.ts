import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/common/database';
import { Product, ProductDocument } from '../models';

@Injectable()
export class ProductRepository extends Repository<ProductDocument> {
  constructor(@InjectModel(Product.name) productModel: Model<ProductDocument>) {
    super(productModel);
  }
}

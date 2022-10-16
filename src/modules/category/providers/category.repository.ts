import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/common/database';
import { Category, CategoryDocument } from '../models';

@Injectable()
export class CategoryRepository extends Repository<CategoryDocument> {
  constructor(
    @InjectModel(Category.name) categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}

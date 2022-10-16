import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/common/database';
import { Review, ReviewDocument } from '../model';

@Injectable()
export class ReviewRepository extends Repository<ReviewDocument> {
  constructor(@InjectModel(Review.name) reviewModel: Model<ReviewDocument>) {
    super(reviewModel);
  }
}

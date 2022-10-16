import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './review.repository';
import { ReviewDocument } from '../model';
import { createReviewDto, updateReviewDto } from '../dtos';

@Injectable()
export class ReviewService {
  constructor(private _reviewRepository: ReviewRepository) {}

  async find(): Promise<ReviewDocument[] | null> {
    const docs = await this._reviewRepository.find({});
    return docs;
  }

  async findById(id: string): Promise<ReviewDocument | null> {
    const doc = await this._reviewRepository.findOne({ id });
    return doc;
  }

  async findByEmail(email: string): Promise<ReviewDocument | null> {
    const doc = await this._reviewRepository.findOne({ email });
    return doc;
  }

  async create(data: createReviewDto): Promise<ReviewDocument | null> {
    const createDoc = await this._reviewRepository.create(data);
    return createDoc;
  }

  async update(id, data: updateReviewDto): Promise<ReviewDocument | null> {
    const updateDoc = await this._reviewRepository.update({ id }, data);
    return updateDoc;
  }

  async delete(id): Promise<null> {
    return this._reviewRepository.delete({ id });
  }

  async deleteAll() {
    return this._reviewRepository.deleteMany({});
  }
}

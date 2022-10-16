import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductDocument } from '../models';

import { TestService } from './test.service';

@Injectable()
export class ProductService {
  constructor(
    private _productRepository: ProductRepository,
    private _testService: TestService,
  ) {}

  async find(): Promise<ProductDocument[] | null> {
    const docs = await this._productRepository.find({});
    return docs;
  }

  async findById(id: string): Promise<ProductDocument | null> {
    const doc = await this._productRepository.findOne({ id });
    return doc;
  }

  // async findByEmail(email: string): Promise<ProductDocument | null> {
  //   const doc = await this._productRepository.findOne({ email });
  //   return doc;
  // }

  async create(data): Promise<ProductDocument | null> {
    const createDoc = await this._productRepository.create(data);
    return createDoc;
  }

  async update(id, data): Promise<ProductDocument | null> {
    const updateDoc = await this._productRepository.update({ id }, data);
    return updateDoc;
  }

  async delete(id): Promise<null> {
    return this._productRepository.delete({ id });
  }

  async deleteAll() {
    return this._productRepository.deleteMany({});
  }
}

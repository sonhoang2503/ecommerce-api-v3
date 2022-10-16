import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CategoryDocument } from '../models';

@Injectable()
export class CategoryService {
  constructor(private _categoryRepository: CategoryRepository) {}

  async find(): Promise<CategoryDocument[] | null> {
    const users = await this._categoryRepository.find({});
    return users;
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    const user = await this._categoryRepository.findOne({ id });
    return user;
  }

  // async findByEmail(email: string): Promise<CategoryDocument | null> {
  //   const user = await this._categoryRepository.findOne({ email });
  //   return user;
  // }

  async create(data): Promise<CategoryDocument | null> {
    const createUser = await this._categoryRepository.create(data);
    return createUser;
  }

  async update(id, data): Promise<CategoryDocument | null> {
    const updateUser = await this._categoryRepository.update({ id }, data);
    return updateUser;
  }

  async delete(id): Promise<null> {
    return this._categoryRepository.delete({ id });
  }

  async deleteAll() {
    return this._categoryRepository.deleteMany({});
  }
}

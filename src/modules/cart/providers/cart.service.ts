import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { CartDocument } from '../model';

@Injectable()
export class CartService {
  constructor(private _cartRepository: CartRepository) {}

  async find(): Promise<CartDocument[] | null> {
    const users = await this._cartRepository.find({});
    return users;
  }

  async findById(id: string): Promise<CartDocument | null> {
    const user = await this._cartRepository.findOne({ id });
    return user;
  }

  // async findByEmail(email: string): Promise<CartDocument | null> {
  //   const user = await this._cartRepository.findOne({ email });
  //   return user;
  // }

  async create(data): Promise<CartDocument | null> {
    const createUser = await this._cartRepository.create(data);
    return createUser;
  }

  async update(id, data): Promise<CartDocument | null> {
    const updateUser = await this._cartRepository.update({ id }, data);
    return updateUser;
  }

  async delete(id): Promise<null> {
    return this._cartRepository.delete({ id });
  }

  async deleteAll() {
    return this._cartRepository.deleteMany({});
  }
}

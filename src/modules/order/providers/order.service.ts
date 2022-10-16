import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderDocument } from '../model';

@Injectable()
export class OrderService {
  constructor(private _orderRepository: OrderRepository) {}

  async find(): Promise<OrderDocument[] | null> {
    const users = await this._orderRepository.find({});
    return users;
  }

  async findById(id: string): Promise<OrderDocument | null> {
    const user = await this._orderRepository.findOne({ id });
    return user;
  }

  // async findByEmail(email: string): Promise<OrderDocument | null> {
  //   const user = await this._orderRepository.findOne({ email });
  //   return user;
  // }

  async create(data): Promise<OrderDocument | null> {
    const createUser = await this._orderRepository.create(data);
    return createUser;
  }

  async update(id, data): Promise<OrderDocument | null> {
    const updateUser = await this._orderRepository.update({ id }, data);
    return updateUser;
  }

  async delete(id): Promise<null> {
    return this._orderRepository.delete({ id });
  }

  async deleteAll() {
    return this._orderRepository.deleteMany({});
  }
}

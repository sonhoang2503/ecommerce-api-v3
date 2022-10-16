import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/common/database';
import { OrderDocument, Order } from '../model';

@Injectable()
export class OrderRepository extends Repository<OrderDocument> {
  constructor(@InjectModel(Order.name) orderModel: Model<OrderDocument>) {
    super(orderModel);
  }
}

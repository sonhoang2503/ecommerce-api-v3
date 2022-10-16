import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/common/database';
import { Cart, CartDocument } from '../model';

@Injectable()
export class CartRepository extends Repository<CartDocument> {
  constructor(@InjectModel(Cart.name) cartModel: Model<CartDocument>) {
    super(cartModel);
  }
}

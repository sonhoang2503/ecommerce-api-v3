import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { payments, status } from 'src/common/enum';

export interface Iitem {
  product_id: string;
  quantity: number;
  price: number;
  attr: any;
}

export interface Ishipiing_address {
  street: string;
  address_line: string;
  city: string;
  region: string;
}

export interface Ipayment {
  methods: payments;
  status: status;
}

@Schema()
export class Order {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user_id: MongooseSchema.Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.Map] })
  line_items: Iitem[];

  @Prop({ type: MongooseSchema.Types.Map })
  shipping_address: Ishipiing_address;

  @Prop({ type: MongooseSchema.Types.Map })
  payments: Ipayment;

  @Prop({ type: Number, required: true })
  shipping_fee: number;

  @Prop({ type: Number, required: true })
  sub_total: number;

  @Prop({ type: Number, required: true })
  total: number;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

// import { payments, status } from 'src/common/enum';

export interface Iitem {
  product_id: string;
  quantity: number;
  price: number;
  attr: any;
}

@Schema()
export class Cart {
  @Prop({})
  status: string;

  @Prop({ type: Date })
  last_modified: Date;

  @Prop({ type: Date })
  expires: Date;

  @Prop({ type: [MongooseSchema.Types.Map] })
  line_items: Iitem[];
}

export type CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);

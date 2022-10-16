import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { StorageOptions } from 'src/common/enum';

export interface IProductAttribute {
  storage: StorageOptions;
  color: string;
}

@Schema()
export class ProductOptions {
  @Prop({ type: String, required: true })
  sku: string;
  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  stock: number;

  @Prop({ type: Object as () => IProductAttribute })
  attr: IProductAttribute;
}

export const ProductOptionsSchema =
  SchemaFactory.createForClass(ProductOptions);

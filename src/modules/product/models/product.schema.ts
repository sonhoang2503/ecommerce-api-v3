import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ProductOptionsSchema, ProductOptions } from './product-options.schema';

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  slug: string;

  @Prop({ type: String, required: true })
  desc: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: Number })
  avg_rating: number;

  @Prop({ type: Number })
  total_rating: number;

  @Prop({ type: [ProductOptionsSchema], default: [] })
  options: ProductOptions[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  primary_category: MongooseSchema.Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Category' })
  category_ids: [MongooseSchema.Types.ObjectId];
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);

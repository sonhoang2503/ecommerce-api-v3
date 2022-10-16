import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Category {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  parent_id: MongooseSchema.Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.Map], required: true })
  ancestors: Iancestors[];
}

export interface Iancestors {
  readonly name: string;
  readonly slug: string;
  readonly _id: string;
}

export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);

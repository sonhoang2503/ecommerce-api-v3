import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Review {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  review: string;

  @Prop({ type: Number, min: 1, max: 5 })
  rating: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user_id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product' })
  product_id: MongooseSchema.Types.ObjectId;
}

export type ReviewDocument = Review & Document;
export const ReviewSchema = SchemaFactory.createForClass(Review);

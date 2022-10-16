import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

@Schema()
export class Wishlist {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user_id: MongooseSchema.Types.ObjectId;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Product' })
  product_id: [MongooseSchema.Types.ObjectId];
}

export type WishlistDocument = Wishlist & Document;
export const WishlistSchema = SchemaFactory.createForClass(Wishlist);

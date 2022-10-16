import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Role } from 'src/common/enum';
import { UtilsService } from 'src/utils/';

@Schema()
export class User {
  @Prop({ type: String })
  first_name: string;

  @Prop({ type: String })
  last_name: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String })
  refresh_token: string;

  @Prop({ enum: Role, default: Role.USER })
  role: string;

  @Prop({ type: Boolean, default: false })
  isVerified: boolean;

  @Prop({ type: [MongooseSchema.Types.Mixed], default: [] })
  address: address[];
}

export interface address {
  street: string;
  address_line1: string;
  address_line2: string;
  city: string;
  region: string;
  shipping: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  this.password = await UtilsService.hash(this.password);

  next();
});

// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { UserAddress } from './user-address.schema';

// @Schema()
// export class User {
//   @Prop({ type: String, required: true })
//   username: string;

//   @Prop({ type: String, required: true, unique: true })
//   email: string;

//   @Prop({ type: String, r })
//   password: string;

//   @Prop()
//   role: string;

//   @Prop()
//   isVerified: boolean;

//   @Prop({ type: [UserAddress], default: [] })
//   address: UserAddress[];
// }

// export type UserDocument = User & Document;
// export const UserSchema = SchemaFactory.createForClass(User);

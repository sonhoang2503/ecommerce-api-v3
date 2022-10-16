import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsObject,
  IsNumber,
  // IsEnum,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
// import {
//   payments as PaymentMethod,
//   status as PaymentStatus,
// } from 'src/common/enum';

export class item_attrs {
  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  size: string;

  @IsString()
  @IsOptional()
  storage: string;
}

export class item {
  @IsString()
  @IsNotEmpty()
  product_id: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsObject()
  @ValidateNested()
  @Type(() => item_attrs)
  attrs: item_attrs;
}

export class createCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => item)
  line_items: item[];

  @IsDate()
  last_modified: Date;

  @IsDate()
  expires: Date;

  @IsString()
  @IsNotEmpty()
  status: string;
}

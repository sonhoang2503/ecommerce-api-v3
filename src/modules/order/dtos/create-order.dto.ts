import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsObject,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  payments as PaymentMethod,
  status as PaymentStatus,
} from 'src/common/enum';

export class payment {
  @IsEnum(PaymentMethod)
  methods: string;

  @IsEnum(PaymentStatus)
  status: string;
}

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

export class createOrderDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => item)
  line_items: item[];

  @IsObject()
  @ValidateNested()
  @Type(() => payment)
  payments: payment;

  @IsObject()
  @ValidateNested()
  @Type(() => shipping_address)
  shipping_address: shipping_address[];

  @IsNumber()
  @IsNotEmpty()
  shipping_fee: number;

  @IsNumber()
  @IsNotEmpty()
  sub_total: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;
}

export class shipping_address {
  @IsString()
  street: string;
  @IsString()
  address_line1: string;
  @IsString()
  @IsOptional()
  address_line2?: string;
  @IsString()
  city: string;
  @IsString()
  region: string;
}

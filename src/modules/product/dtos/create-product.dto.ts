import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNumber,
  IsObject,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

import { StorageOptions } from 'src/common/enum';

export class options {
  @IsEnum(StorageOptions)
  storage: StorageOptions;

  @IsString()
  @IsNotEmpty()
  color: string;
}

export class IProductOptions {
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  inventory: number;

  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => options)
  options: options;
}

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  desc: string;

  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => String)
  images: string[];

  @IsNumber()
  @IsNotEmpty()
  avg_rating: number;

  @IsNumber()
  @IsNotEmpty()
  total_rating: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IProductOptions)
  options: IProductOptions[];

  // @IsString()
  // @IsNotEmpty()
  // primary_category: string;

  // @IsOptional()
  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => String)
  // category_ids: string[];
}

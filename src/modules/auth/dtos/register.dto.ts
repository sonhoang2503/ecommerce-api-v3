import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class registerDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IUserAddress)
  address: IUserAddress[];

  @IsOptional()
  @IsString()
  refresh_token: string;
}

export class IUserAddress {
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
  @IsString()
  postal_code: string;
}

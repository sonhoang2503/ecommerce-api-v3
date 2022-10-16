import {
  IsNotEmpty,
  IsNumber,
  IsString,
  // IsOptional,
  // IsArray,
  // ValidateNested,
} from 'class-validator';

export class createReviewDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  review: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  product_id: string;
}

import { IsString, IsNotEmpty } from 'class-validator';

export class createWishlistDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  product_id: string;
}

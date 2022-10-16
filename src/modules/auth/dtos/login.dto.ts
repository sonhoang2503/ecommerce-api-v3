import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class loginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

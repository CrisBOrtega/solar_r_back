import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  tipo_id: string;


  
}


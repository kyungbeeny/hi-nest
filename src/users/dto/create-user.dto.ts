import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  u_id: string;

  @IsNotEmpty()
  @IsString()
  u_pw: string;
}

import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {  
  @IsString()
  @IsNotEmpty()
  @MinLength
  firstName: string
  
  @IsString()
  @IsOptional()
  lastName?: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {  
  @IsString()
  @IsNotEmpty()
  firstName: string
  
  @IsString()
  @IsOptional()
  lastName?: string
  
  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
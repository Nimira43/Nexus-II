import { IsString } from 'class-validator'

export class CreateUserDto {  
  firstName: string
  lastName: string
  email: string
  password: string
}
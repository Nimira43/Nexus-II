import { IsInt, IsOptional } from 'class-validator'

export class GetUsersParamsDto {
  @IsOptional()
  @IsInt()
  id?: number
}
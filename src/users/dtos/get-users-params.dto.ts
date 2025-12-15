import { IsOptional } from 'class-validator'

export class GetUsersParamsDto {
  @IsOptional()
  id?: number
}
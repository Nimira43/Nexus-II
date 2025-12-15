import { Controller, Get, Post, Query, Param, Body, ParseIntPipe, DefaultValuePipe } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { GetUsersParamsDto } from './dtos/get-users-params.dto'

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamsDto, 
    @Query('limit',  new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    console.log(getUserParamDto)
    return 'You have sent a GET request to users endpoint'
  }
  
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
  ) {
    console.log(createUserDto instanceof CreateUserDto)
    return 'You have sent a POST request to users endpoint'
  }

}

import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req, Headers, Id } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(
    @Param('id') id: any, 
    @Query('limit') limit: any
  ) {
    console.log(id)
    console.log(limit)
    return 'You have sent a GET request to users endpoint'
  }
  
  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Id() id: any
  ) {
    console.log(request)
    console.log(headers)
    console.log(id)
    return 'You have sent a POST request to users endpoint'
  }

}

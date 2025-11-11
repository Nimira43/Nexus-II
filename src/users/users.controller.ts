import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req, Headers, Ip, ParseIntPipe } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined , 
    @Query('limit', ParseIntPipe) limit: any,
    @Query('page', ParseIntPipe) page: any
  ) {
    console.log(typeof id)
    console.log(id)
    return 'You have sent a GET request to users endpoint'
  }
  
  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any
  ) {
    console.log(request)
    console.log(headers)
    console.log(ip)
    return 'You have sent a POST request to users endpoint'
  }

}

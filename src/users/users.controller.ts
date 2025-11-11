import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined , 
    @Query('limit',  new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(10), ParseIntPipe) page: number
  ) {
    console.log(typeof limit)
    console.log(typeof page)
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

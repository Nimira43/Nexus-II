import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req, Headers } from '@nestjs/common'

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
    @Body() request: any
  ) {
    console.log(request)
    return 'You have sent a POST request to users endpoint'
  }

}

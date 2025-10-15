import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(
    @Param() params: any, 
    @Query() query: any
  ) {
    console.log(params)
    console.log(query)
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

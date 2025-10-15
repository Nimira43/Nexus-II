import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers() {
    return 'You have sent a GET request to users endpoint'
  }
  
  @Post()
  public createUsers() {
    return 'You have sent a POST request to users endpoint'
  }

}

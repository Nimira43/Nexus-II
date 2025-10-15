import { Controller, Get } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'You have sent a GET request to users endpoint'
  }
}

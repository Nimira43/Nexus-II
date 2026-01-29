import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    console.log(userId)

    return [
      {
        title: 'Test Title 1',
        content: 'Test Content 1'
      },
      {
        title: 'Test Title 2',
        content: 'Test Content 2'
      }
    ]
  }
}

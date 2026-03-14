import { CreatePostDto } from './dtos/create-post.dto'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostsService } from './providers/posts.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) {}
  
  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId)
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {}
}

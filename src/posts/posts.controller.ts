import { CreatePostDto } from './dtos/create-post.dto'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostsService } from './providers/posts.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

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

  @ApiOperation({
    summary: 'Creates a new blog post.'
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully.'
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto)
  }
}

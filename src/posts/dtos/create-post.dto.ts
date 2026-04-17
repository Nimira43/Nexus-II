import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({
    example: 'This is the Title of this Post',
    description: 'This is the title of the blog post.',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string

  @ApiProperty({
    enum: postType,
    description: "Possible values: 'post', 'page', 'story', 'series'."
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType
  
  @ApiProperty({
    example: 'my-blog-post',
    description: "For example: 'my-url'.",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all small letters and can use "-". There should be no spaces. For example: "my-url"',

  })
  slug: string
  
  @ApiProperty({
    enum: postStatus,
    description: "Possible value: 'draft', 'scheduled', 'review', 'published'.",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus

  @ApiPropertyOptional({
    description: 'This is an example of the post.',
    example: 'The post content.'
  })
  @IsString()
  @IsOptional()
  content?: string

  @ApiPropertyOptional({
    description: 'Serialise your JSON object otherwise a validation error will be thrown.',
    example: '{\r\n \"@context\": \"https\/\/schema.org\",\r\n \"@type\": \"Person\"\r\n }'
  })
  @IsOptional()
  @IsJSON()
  schema?: string

  @ApiPropertyOptional({
    description: 'Featured image URL for your blog post.',
    example: 'http://localhost.com/images/image1.jpg'
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string

  @ApiPropertyOptional({
    description: 'The date on which the blog post is published.',
    example: '2024-03-16T07:46:32+0000'
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date
  
  @ApiPropertyOptional({
    description: 'Array of tags passed as string values.',
    example: ['nest js', 'typescript'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[]

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key can be any string identifier for your meta option.',
          example: 'sidebarEnabled'
        },
        value: {
          type: 'any',
          description: 'Any value that you want to save to the key.',
          example: true
        },
      }
    }
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true})
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[]
}
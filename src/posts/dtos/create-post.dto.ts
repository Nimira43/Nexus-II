import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

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
  
  @IsString()
  @IsOptional()
  content?: string

  @IsOptional()
  @IsJSON()
  schema?: string

  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string

  @IsISO8601()
  @IsOptional()
  publishOn?: Date
  
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[]

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true})
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[]
}
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { PostService } from './post.service';
import { Post as post} from './post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  index(): Promise<post[]> {
    return this.postService.findAll();
  }

  @Get('relations')
  getAllWithRelations() {
    return this.postService.findAllWithRelations();
  }

  @Post('create')
  async create(@Body() postData: post): Promise<any> {
    console.log(postData);
    return this.postService.create(postData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() postData: post): Promise<any> {
    postData.id = Number(id);
    console.log('Update #' + postData.id);
    return this.postService.update(postData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.postService.delete(id);
  }
}
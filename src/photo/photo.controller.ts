import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Get()
  index(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('relations')
  getAllWithRelations() {
    return this.photoService.findAllWithRelations();
  }

  @Post('create')
  async create(@Body() photoData: Photo): Promise<any> {
    console.log(photoData);
    return this.photoService.create(photoData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() photoData: Photo): Promise<any> {
    photoData.id = Number(id);
    console.log('Update #' + photoData.id);
    return this.photoService.update(photoData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.photoService.delete(id);
  }
}

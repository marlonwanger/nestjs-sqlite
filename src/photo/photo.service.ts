import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findAllWithRelations(): Promise<Photo[]> {
    return await this.photoRepository.find({ relations: ["user"] });
  }

  async create(photo: Photo): Promise<Photo> {
    return await this.photoRepository.save(photo);
  }

  async update(photo: Photo): Promise<UpdateResult> {
    return await this.photoRepository.update(photo.id, photo);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.photoRepository.delete(id);
  }
}

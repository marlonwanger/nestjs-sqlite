import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private contactRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.contactRepository.find();
  }

  async findAllWithRelations(): Promise<Post[]> {
    return await this.contactRepository.find({ relations: ["author"] });
  }

  async create(post: Post): Promise<Post> {
    return await this.contactRepository.save(post);
  }

  async update(post: Post): Promise<UpdateResult> {
    return await this.contactRepository.update(post.id, post);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}

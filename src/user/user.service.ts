import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private contactRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.contactRepository.find();
  }

  async findAllPostWithRelations(): Promise<User[]> {
    return await this.contactRepository.find({ relations: ["posts"] });
  }

  async create(user: User): Promise<User> {
    return await this.contactRepository.save(user);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.contactRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}

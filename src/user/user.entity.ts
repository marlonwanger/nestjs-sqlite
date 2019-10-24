import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Photo } from '../photo/photo.entity';
import { Post } from '../post/post.entity';
import { Category } from '../category/category.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];

  @OneToMany(type => Post, (post: Post) => post.author)
  public posts: Post[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}

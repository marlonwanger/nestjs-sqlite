import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
 
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public title: string;
 
  @Column()
  public content: string;
 
  @ManyToOne( type => User, (author: User) => author.posts)
  public author: User;
}
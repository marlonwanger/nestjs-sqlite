import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
}
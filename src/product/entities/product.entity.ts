import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/base.entity';
import { Comment } from 'src/comment/entities/comment.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public price: number;

  @Column()
  public imageUrl: string;

  @OneToMany(() => Comment, (comment: Comment) => comment.product)
  public comments: Comment[];
}

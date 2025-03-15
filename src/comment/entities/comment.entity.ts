import { BaseEntity } from 'src/common/base.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @Column()
  public content: string;

  @ManyToOne(() => Product, (product: Product) => product.comments)
  public product: Product;
}

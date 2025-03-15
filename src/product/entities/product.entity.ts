import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/common/base.entity';

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
}

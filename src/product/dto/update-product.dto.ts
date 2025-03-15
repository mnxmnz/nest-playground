import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    description: 'The name of the product',
    example: 'iPhone 15',
  })
  public name: string;

  @ApiProperty({
    description: 'The description of the product',
    example: 'iPhone 15 description',
  })
  public description: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 1500000,
  })
  public price: number;

  @ApiProperty({
    description: 'The image URL of the product',
    example: 'https://example.com/product1.jpg',
  })
  public imageUrl: string;
}

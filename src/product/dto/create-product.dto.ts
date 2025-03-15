import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'iPhone 15',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the product',
    example: 'iPhone 15 description',
  })
  description: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 1500000,
  })
  price: number;

  @ApiProperty({
    description: 'The image URL of the product',
    example: 'https://example.com/product1.jpg',
  })
  imageUrl: string;
}

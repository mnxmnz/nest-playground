import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productService.getAllProducts();
    return products;
  }

  @Post('/create')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    const newProduct =
      await this.productService.createProduct(createProductDto);
    return newProduct;
  }

  @Get('/:id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    const product = await this.productService.getProductById(id);
    return product;
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productService.updateProduct(
      id,
      updateProductDto,
    );
    return updatedProduct;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    await this.productService.deleteProduct(id);
  }
}

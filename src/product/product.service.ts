import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>;

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProductById(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.getProductById(id);
    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.update(id, updateProductDto);
    return updatedProduct;
  }

  async deleteProductById(id: string): Promise<string> {
    const deletedProduct = await this.getProductById(id);
    if (!deletedProduct) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.delete(deletedProduct);
    return 'Product deleted successfully';
  }
}

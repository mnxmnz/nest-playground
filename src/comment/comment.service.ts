import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly productService: ProductService,
  ) {}

  async create(
    productId: string,
    createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    const { content } = createCommentDto;
    const product = await this.productService.getProductById(productId);
    const newComment = this.commentRepository.create({
      content,
      product,
    });
    await this.commentRepository.save(newComment);
    return newComment;
  }
}

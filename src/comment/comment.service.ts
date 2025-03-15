import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ProductService } from 'src/product/product.service';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly productService: ProductService,
  ) {}

  async getAllComments(): Promise<Comment[]> {
    const comments = await this.commentRepository.find();
    return comments;
  }

  async createComment(
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

  async getCommentById(commentId: string): Promise<Comment> {
    const comment = await this.commentRepository.findOne({
      where: { id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return comment;
  }

  async updateCommentById(
    commentId: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const updatedComment = await this.getCommentById(commentId);
    if (!updatedComment) {
      throw new NotFoundException('Comment not found');
    }
    await this.commentRepository.update(commentId, updateCommentDto);
    return updatedComment;
  }

  async deleteCommentById(id: string): Promise<string> {
    const deletedComment = await this.getCommentById(id);
    if (!deletedComment) {
      throw new NotFoundException('Comment not found');
    }
    await this.commentRepository.delete(deletedComment);
    return 'Comment deleted successfully';
  }
}

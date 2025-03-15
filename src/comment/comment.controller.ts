import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/all')
  async getAllComments(): Promise<Comment[]> {
    const comments = await this.commentService.getAllComments();
    return comments;
  }

  @Post('/:productId')
  async create(
    @Param('productId') productId: string,
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    return await this.commentService.createComment(productId, createCommentDto);
  }

  @Get('/:commentId')
  async getCommentById(
    @Param('commentId') commentId: string,
  ): Promise<Comment> {
    const comment = await this.commentService.getCommentById(commentId);
    return comment;
  }

  @Put('/:commentId')
  async updateCommentById(
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const updatedComment = await this.commentService.updateCommentById(
      commentId,
      updateCommentDto,
    );
    return updatedComment;
  }

  @Delete('/:commentId')
  async deleteCommentById(
    @Param('commentId') commentId: string,
  ): Promise<string> {
    const deletedComment =
      await this.commentService.deleteCommentById(commentId);
    return deletedComment;
  }
}

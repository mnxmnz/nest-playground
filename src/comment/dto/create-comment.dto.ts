import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'The content of the comment',
    example: 'This is a comment',
  })
  public content: string;
}

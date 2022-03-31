import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    content = "content",
    title = "title"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })

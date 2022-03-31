import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class CategoryWhereInput {

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}

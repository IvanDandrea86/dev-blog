import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PostWhereInput {

    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: CategoryListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;
}

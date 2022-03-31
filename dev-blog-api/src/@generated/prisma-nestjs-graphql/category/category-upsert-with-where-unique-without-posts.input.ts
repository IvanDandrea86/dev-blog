import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutPostsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    update!: CategoryUpdateWithoutPostsInput;

    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    create!: CategoryCreateWithoutPostsInput;
}

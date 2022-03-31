import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutPostsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    data!: CategoryUpdateWithoutPostsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    data!: PostUpdateWithoutCategoriesInput;
}

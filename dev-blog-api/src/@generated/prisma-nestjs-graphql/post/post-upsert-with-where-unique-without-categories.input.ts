import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    update!: PostUpdateWithoutCategoriesInput;

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    create!: PostCreateWithoutCategoriesInput;
}

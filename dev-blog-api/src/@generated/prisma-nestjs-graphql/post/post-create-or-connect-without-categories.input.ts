import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';

@InputType()
export class PostCreateOrConnectWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    create!: PostCreateWithoutCategoriesInput;
}

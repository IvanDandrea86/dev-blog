import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostCreateWithoutCategoriesInput {

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutPostsInput;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    title!: string;
}

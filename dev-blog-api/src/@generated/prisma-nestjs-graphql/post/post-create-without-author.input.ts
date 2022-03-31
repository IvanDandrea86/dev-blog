import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutPostsInput } from '../category/category-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutAuthorInput {

    @Field(() => CategoryCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutPostsInput;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    title!: string;
}

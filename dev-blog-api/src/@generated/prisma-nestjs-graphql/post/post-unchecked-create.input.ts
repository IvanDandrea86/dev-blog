import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutPostsInput } from '../category/category-unchecked-create-nested-many-without-posts.input';

@InputType()
export class PostUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    title!: string;
}

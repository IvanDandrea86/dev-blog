import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoriesInput } from '../post/post-create-nested-many-without-categories.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutCategoriesInput;
}

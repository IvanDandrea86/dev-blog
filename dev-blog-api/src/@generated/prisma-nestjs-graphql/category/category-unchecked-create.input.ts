import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutCategoriesInput } from '../post/post-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput;
}

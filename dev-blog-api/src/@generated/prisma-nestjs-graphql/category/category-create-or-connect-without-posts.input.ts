import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';

@InputType()
export class CategoryCreateOrConnectWithoutPostsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    create!: CategoryCreateWithoutPostsInput;
}

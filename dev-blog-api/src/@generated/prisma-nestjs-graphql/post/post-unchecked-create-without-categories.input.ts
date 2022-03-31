import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PostUncheckedCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    title!: string;
}

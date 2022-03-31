import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    title?: string;
}

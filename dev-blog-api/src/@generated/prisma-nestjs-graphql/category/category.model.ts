import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}

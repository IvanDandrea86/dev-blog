import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}

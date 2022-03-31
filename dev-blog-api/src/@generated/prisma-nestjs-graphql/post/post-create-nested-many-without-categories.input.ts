import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutCategoriesInput {

    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<PostCreateWithoutCategoriesInput>;

    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
}

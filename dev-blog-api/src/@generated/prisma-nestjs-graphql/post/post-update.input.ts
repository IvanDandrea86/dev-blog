import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';
import { CategoryUpdateManyWithoutPostsInput } from '../category/category-update-many-without-posts.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PostUpdateInput {

    @Field(() => UserUpdateOneWithoutPostsInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsInput;

    @Field(() => CategoryUpdateManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutPostsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;
}

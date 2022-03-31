import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PostUpdateWithoutCategoriesInput {

    @Field(() => UserUpdateOneWithoutPostsInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;
}

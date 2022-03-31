import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateManyWithoutPostsInput } from '../category/category-update-many-without-posts.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PostUpdateWithoutAuthorInput {

    @Field(() => CategoryUpdateManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutPostsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;
}

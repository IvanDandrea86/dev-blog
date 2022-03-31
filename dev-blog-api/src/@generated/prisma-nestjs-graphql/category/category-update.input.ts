import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateManyWithoutCategoriesInput } from '../post/post-update-many-without-categories.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutCategoriesInput, {nullable:true})
    posts?: PostUpdateManyWithoutCategoriesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutCategoriesInput } from '../post/post-unchecked-update-many-without-categories.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUncheckedUpdateManyWithoutCategoriesInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutCategoriesInput;
}

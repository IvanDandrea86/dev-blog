import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutPostsInput } from '../category/category-unchecked-update-many-without-posts.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUncheckedUpdateManyWithoutPostsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;
}

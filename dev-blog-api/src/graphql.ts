
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class CreateCategoryInput {
    name: string;
    posts: CreatePostInput[];
}

export class UpdateCategoryInput {
    name: string;
    posts: CreatePostInput[];
}

export class CreatePostInput {
    author: CreateUserInput;
    authorId: number;
    categories: CreateCategoryInput[];
    content?: Nullable<string>;
}

export class UpdatePostInput {
    author: CreateUserInput;
    authorId: number;
    categories: CreateCategoryInput[];
    content?: Nullable<string>;
}

export class CreateUserInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    email: string;
    password: string;
}

export class Category {
    id: number;
    name: string;
    posts: Post[];
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract categories(): Nullable<Category>[] | Promise<Nullable<Category>[]>;

    abstract category(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;

    abstract removeCategory(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Post {
    id: number;
    author: User;
    authorId: number;
    categories: Category[];
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class User {
    id?: Nullable<number>;
    email: string;
    password: string;
    posts: Post[];
    role?: Nullable<Role>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;

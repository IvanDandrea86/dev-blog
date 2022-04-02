
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

export class LoginUserInput {
    email: string;
    password: string;
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
    author?: Nullable<CreateUserInput>;
    authorId?: Nullable<number>;
    title?: Nullable<string>;
    categories?: Nullable<Nullable<CreateCategoryInput>[]>;
    content?: Nullable<string>;
}

export class UpdatePostInput {
    author?: Nullable<CreateUserInput>;
    authorId: number;
    categories?: Nullable<Nullable<CreateCategoryInput>[]>;
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

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class LoginResponse {
    msg?: Nullable<string>;
    user?: Nullable<User>;
}

export abstract class IMutation {
    abstract login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;

    abstract logout(): Nullable<boolean> | Promise<Nullable<boolean>>;

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

export abstract class IQuery {
    abstract whoAmI(): User | Promise<User>;

    abstract categories(): Nullable<Category>[] | Promise<Nullable<Category>[]>;

    abstract category(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getTotalPost(): number | Promise<number>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(orderBy?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Category {
    id: number;
    name: string;
    posts: Post[];
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Post {
    id: number;
    author: User;
    authorId: number;
    categories: Category[];
    title?: Nullable<string>;
    content?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class ISubscription {
    abstract postAdded(): Post | Promise<Post>;

    abstract userAdded(): User | Promise<User>;
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

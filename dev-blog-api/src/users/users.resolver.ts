import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { OrderByParams } from '../graphql';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Inject, UseGuards } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '../pubSub.module';
import { AuthorizationGuard } from '../auth/guards/authorization.guard';


const USER_ADDED_EVENT = 'userAdded';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
  ) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: UserCreateInput) {
    const newUser = await this.usersService.create(createUserInput);
    this.pubSub.publish(USER_ADDED_EVENT, { userAdded: newUser });
    return newUser;
  }

  @Query('users')
  @UseGuards(AuthorizationGuard)
  findAll(@Args('orderBy') orderBy: OrderByParams) {
    return this.usersService.findAll(orderBy);
  }
  @Subscription(() => User)
  userAdded() {
    return this.pubSub.asyncIterator(USER_ADDED_EVENT);
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}

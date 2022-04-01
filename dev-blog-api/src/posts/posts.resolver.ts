import { PostCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-create.input';
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-update.input';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '../pubSub.module';
import { Post } from '../graphql';

const POST_ADDED_EVENT = 'postAdded';

@Resolver('Post')
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
  ) {}

  @Mutation('createPost')
  async create(@Args('createPostInput') createPostInput: PostCreateInput) {
    try {
      const newPost = await this.postsService.create(createPostInput);
      this.pubSub.publish(POST_ADDED_EVENT, { postAdded: newPost });
      return newPost;
    } catch (err) {
      return console.error(err);
    }
  }
  @Subscription(() => Post)
  postAdded() {
    return this.pubSub.asyncIterator(POST_ADDED_EVENT);
  }

  @Query('posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }
  @Query('getTotalPost')
  getTotalPost() {
    return this.postsService.getTotal();
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostInput: PostUpdateInput) {
    return this.postsService.update(updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: number) {
    return this.postsService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { PubSubModule } from '../pubSub.module';

@Module({
  providers: [PostsResolver, PostsService, PrismaService],
  imports: [PubSubModule],
})
export class PostsModule {}

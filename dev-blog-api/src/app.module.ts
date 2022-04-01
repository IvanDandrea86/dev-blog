import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLDateTime } from 'graphql-iso-date';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      cors: { origin: true, credentials: true },
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      resolvers: { DateTime: GraphQLDateTime },
      installSubscriptionHandlers: true,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    PostsModule,
    CategoriesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'dev-blog-ui/build'),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

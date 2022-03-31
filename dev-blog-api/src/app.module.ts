import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';
import {CategoriesModule} from './categories/categories.module';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {GraphQLDateTime} from 'graphql-iso-date';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
			resolvers: {DateTime: GraphQLDateTime},
			installSubscriptionHandlers: true,
		}),
		ConfigModule.forRoot(),
		UsersModule,
		PostsModule,
		CategoriesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

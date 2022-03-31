import {ConfigModule, ConfigService} from '@nestjs/config';
import {RedisPubSub} from 'graphql-redis-subscriptions';
import {Global, Module} from '@nestjs/common';
import Redis, {RedisOptions} from 'ioredis';

export const PUB_SUB = 'PUB_SUB';
const options: RedisOptions = {
	retryStrategy: (times) => {
		return Math.min(times * 50, 2000);
	},
};
@Global()
@Module({
	imports: [ConfigModule],
	providers: [
		{
			provide: PUB_SUB,
			useFactory: (configService: ConfigService) =>
				new RedisPubSub({
					publisher: new Redis(configService.get('REDIS_URL'), options),
					subscriber: new Redis(configService.get('REDIS_URL'), options),
				}),
			inject: [ConfigService],
		},
	],
	exports: [PUB_SUB],
})
export class PubSubModule {}

import Redis from 'ioredis';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectRedis from 'connect-redis';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ALLOW_ORIGIN,
  COOKIENAME,
  ONEDAY,
  REDIS_URL,
  SECRET,
  __prod__,
} from 'const';

export const redis = new Redis(REDIS_URL);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ALLOW_ORIGIN,
    credentials: true,
  });
  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      secret: SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        secure: __prod__, // cookie only works in https
        maxAge: ONEDAY,
        httpOnly: true,
        sameSite: 'lax', //production 'lax',
      },
      name: COOKIENAME,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

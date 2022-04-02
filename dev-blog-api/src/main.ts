import Redis from 'ioredis';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectRedis from 'connect-redis';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import csurf from 'csurf';
import rateLimit from 'express-rate-limit';
import {
  ALLOW_ORIGIN,
  COOKIENAME,
  ONEDAY,
  REDIS_URL,
  SECRET,
  __prod__,
} from 'const';
import { NestExpressApplication } from '@nestjs/platform-express';

export const redis = new Redis(REDIS_URL);
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ALLOW_ORIGIN,
    credentials: true,
  });
  const RedisStore = connectRedis(session);
  // app.use(helmet());  
  // app.use(csurf());
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );

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
  app.set('trust proxy', 1);
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

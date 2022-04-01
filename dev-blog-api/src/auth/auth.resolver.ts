import { ConsoleLogger, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse, LoginUserInput, User } from '../graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
declare module 'express-session' {
  interface SessionData {
    userID: string;
    roles: string[];
  }
}
@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
    // @Context() { req },
  ) {
    context.req.session.userID = context.user.id;
    console.log(context.req.session.userID);

    return this.authService.login(context.user);
  }
}

import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse, LoginUserInput } from '../graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
    @Context('req') req: Express.Request,
  ) {
    // context.req.session = context.user;

    console.log(req.user);
    return this.authService.login(context.user);
  }
}

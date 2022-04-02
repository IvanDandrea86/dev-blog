import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorator/user.decorator';
import { UsersService } from 'users/users.service';
import { LoginResponse, LoginUserInput, User } from '../graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { COOKIENAME } from 'const';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
    @Context() { req },
  ) {
    await req.logIn(context.user, (err: any) => {
      if (err) {
        return console.error(err);
      }
      return req.user;
    });
    return this.authService.login(req.user);
  }

  @Query(() => User)
  // @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.userService.findOne({ id: user.id });
  }

  @Mutation(() => Boolean)
  async logout(@Context() { req, res }) {
    await req.logout();
    req.session = null;
    res.clearCookie(COOKIENAME);
  }
}

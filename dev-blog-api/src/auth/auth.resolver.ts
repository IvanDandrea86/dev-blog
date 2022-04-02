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
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.req.user);
  }

  @Query(() => User)
  whoAmI(@CurrentUser() user: User | null) {
    if (user) {
      return this.userService.findOne({ id: user.id });
    }
    return null;
  }

  @Mutation(() => LoginResponse)
  async logout(@Context() { req, res }) {
    await req.logout();
    await req.session.destroy();
    await res.clearCookie(COOKIENAME);
    return this.authService.logout(req.user);
  }
}

import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-express';

@Injectable()
export class AuthorizationGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    // req.body = ctx.getArgs().req;
    return req;
  }
  async canActivate(context: ExecutionContext) {
    await super.canActivate(context);
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    return await req.isAuthenticated();
  }
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('AuthorizationGuard');
    }
    return user;
  }
}

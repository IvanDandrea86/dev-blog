import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-express';

@Injectable()
export class AuthenticatedGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  protected readonly logger = new Logger(AuthenticatedGuard.name);

  async canActivate(context: ExecutionContext): Promise<any> {
    await super.canActivate(context);
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return super.canActivate(new ExecutionContextHost([req]));
  }

  handleRequest(err: any, user: any) {
    if (err) {
      this.logger.error(`Auth Error! ${err.message}`);
      throw err;
    }

    if (!user) {
      this.logger.error('Auth Error! User not found');
      throw new AuthenticationError('Auth Error! User not found');
    }

    return user;
  }
}

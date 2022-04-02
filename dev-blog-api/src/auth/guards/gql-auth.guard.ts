import { Injectable, ExecutionContext } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  // async canActivate(context: ExecutionContext): Promise<any> {
  //   await super.canActivate(context);
  //   const ctx = GqlExecutionContext.create(context);
  //   const { req } = ctx.getContext();
  //   return super.canActivate(new ExecutionContextHost([req]));
  // }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().loginUserInput;
    return request;
  }
}

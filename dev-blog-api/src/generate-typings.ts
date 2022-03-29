import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { __prod__ } from './const';

const definitionsFactoriy = new GraphQLDefinitionsFactory();
definitionsFactoriy.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: !__prod__,
});

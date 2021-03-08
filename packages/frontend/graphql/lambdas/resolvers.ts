import { hello } from './hello';
import { addGraphQLResolvers } from '@slash-graphql/lambda-types';

addGraphQLResolvers({
  'User.hello': hello
});

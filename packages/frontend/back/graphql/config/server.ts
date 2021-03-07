import { ApolloServer } from 'apollo-server-micro';
import config from '../../constants/config';
import { driver } from '../../neo4j/db';
import { augmentedSchema } from './schema';

const neo4jDriverInstance = driver();

export const apolloServer = new ApolloServer({
  schema: augmentedSchema.schema,
  context: ({ req }) => ({ req, driver: neo4jDriverInstance, headers: req.headers }),
  introspection: config.isDebugEnabled,
  playground: config.isDebugEnabled
});

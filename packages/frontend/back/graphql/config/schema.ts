import { Neo4jGraphQL } from '@neo4j/graphql';
import { typeDefs } from './typeDefs';
import config from '../../../web/constants/config';

export const augmentedSchema = new Neo4jGraphQL({ typeDefs, debug: config.isDebugEnabled });

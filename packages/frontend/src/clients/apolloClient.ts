import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import config from '../constants/config';

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: config.graphQLURL
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
};

export const apolloClient = createApolloClient();

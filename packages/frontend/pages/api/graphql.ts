// We need to disable the bodyParser so we can consume our API endpoint as a stream

import { apolloServer } from '../../back/graphql/config/server';

// https://nextjs.org/docs/api-routes/api-middlewares#custom-config
export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });

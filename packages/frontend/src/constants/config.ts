type Config = {
  isDebugEnabled: boolean;
  graphQLURL: string;
};

const config: Config = {
  isDebugEnabled: process.env.NEXT_PUBLIC_DEBUG === 'true',
  graphQLURL: process.env.NEXT_PUBLIC_DGRAPH_URL
};

export default config;

type Config = {
  isDebugEnabled: boolean;
};

const config: Config = {
  isDebugEnabled: process.env.NEXT_PUBLIC_DEBUG === 'true'
};

export default config;

type Config = {
  isDebugEnabled: boolean;
  neo4jURI: string;
  neo4jUser: string;
  neo4jPassword: string;
  neo4jEncryptedConnection: boolean;
};

const config: Config = {
  isDebugEnabled: process.env.NEXT_PUBLIC_DEBUG === 'true',
  neo4jURI: process.env.NEO4J_URI,
  neo4jUser: process.env.NEO4J_USER,
  neo4jPassword: process.env.NEO4J_PASSWORD,
  neo4jEncryptedConnection: process.env.NEO4J_ENCRYPTED === 'true'
};

export default config;

import * as neo4j from 'neo4j-driver';
import config from '../constants/config';

// Create a configured neo4j driver instance (this doesn't start a session)
export const driver = (): neo4j.Driver => {
  const isEncrypted = config.neo4jEncryptedConnection;

  return neo4j.driver(config.neo4jURI, neo4j.auth.basic(config.neo4jUser, config.neo4jPassword), {
    encrypted: isEncrypted ? 'ENCRYPTION_ON' : 'ENCRYPTION_OFF'
  });
};

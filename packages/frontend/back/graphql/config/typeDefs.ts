import fs from 'fs';
import path from 'path';

export const typeDefs = fs.readFileSync(path.resolve(`back/graphql/config/schema.graphql`)).toString('utf-8');

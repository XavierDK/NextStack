/* eslint-disable @typescript-eslint/no-var-requires */

const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');
const fs = require('fs');

const loadedFiles = loadFilesSync(`${__dirname}/../schemas/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs =
  '"""\nTHIS FILE IS GENERATED\nDO NOT EDIT IT!!!\nCreate your schema inside the ./schemas directory instead and run npm run schema:generate\n"""\n\n\n' + // eslint-disable-line max-len
  print(typeDefs);
fs.writeFileSync(`${__dirname}/../dist/__schema.graphql`, printedTypeDefs);

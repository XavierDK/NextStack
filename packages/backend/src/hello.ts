import { GraphQLEventWithParent } from '@slash-graphql/lambda-types';

export const hello = ({ parent: { name } }: GraphQLEventWithParent): string => `My name is ${name}.`;

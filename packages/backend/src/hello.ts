import { GraphQLEventWithParent } from '@slash-graphql/lambda-types';

export const hello = ({ parent: { email } }: GraphQLEventWithParent): string => `My email is ${email}.`;

import { AfterCallback, handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0';
import { apolloClient } from '../../../src/clients/apolloClient';
import gql from 'graphql-tag';

export const GET_USER = gql`
  query getUser($sub: String!) {
    getUser(sub: $sub) {
      email
      name
      sub
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(input: [$user]) {
      user {
        email
        sub
      }
    }
  }
`;

const createUser = async (session: Session) => {
  const { data } = await apolloClient.query({ query: GET_USER, variables: { sub: session.user.sub } });
  if (data && data.getUser === null) {
    await apolloClient.mutate({
      mutation: ADD_USER,
      variables: { user: { sub: session.user.sub, email: session.user.email, name: session.user.nickname } }
    });
  }
};

const afterCallback: AfterCallback = async (req, res, session) => {
  await createUser(session);
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});

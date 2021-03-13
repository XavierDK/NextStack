import { NextApiRequest, NextApiResponse } from 'next';
import { setAuthCookies } from 'next-firebase-auth';
import initAuth from '../../src/utils/initAuth';
import gql from 'graphql-tag';
import { apolloClient } from '../../src/clients/apolloClient';

initAuth();

export const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(input: [$user]) {
      user {
        email
      }
    }
  }
`;

const createUser = async (email: string) => {
  const { data } = await apolloClient.query({ query: GET_USER, variables: { email: email } });
  if (data && data.getUser === null) {
    await apolloClient.mutate({
      mutation: ADD_USER,
      variables: { user: { email: email } }
    });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { AuthUser } = await setAuthCookies(req, res);
    createUser(AuthUser.email);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: 'Unexpected error.' });
  }
  return res.status(200).json({ status: true });
};

export default handler;

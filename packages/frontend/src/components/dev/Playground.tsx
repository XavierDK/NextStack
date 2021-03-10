import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Playground as PlaygroundGQL, store } from 'graphql-playground-react';
import DefaultErrorPage from 'next/error';
import useAppService from '../../hooks/useAppState';

const Playground = (): ReactElement => {
  const [current] = useAppService();
  return current.matches('debug.enabled') ? (
    <Provider store={store}>
      <PlaygroundGQL endpoint="http://localhost:8080/graphql" />
    </Provider>
  ) : (
    <DefaultErrorPage statusCode={404} />
  );
};

export default Playground;

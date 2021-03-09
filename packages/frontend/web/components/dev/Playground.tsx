import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';
import DefaultErrorPage from 'next/error';
import useAppService from '../../hooks/useAppState';

export default (): ReactElement => {
  const [current] = useAppService();
  return current.matches('debug.enabled') ? (
    <Provider store={store}>
      <Playground endpoint="http://localhost:8080/graphql" />
    </Provider>
  ) : (
    <DefaultErrorPage statusCode={404} />
  );
};

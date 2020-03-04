import React from 'react';
import {ApolloProvider} from 'react-apollo';

import TodoList from './src/screens/TodoList';
import useApi from './src/store/useApi';

export default () => {
  const api = useApi();

  return api ? (
    <ApolloProvider client={api}>
      <TodoList />
    </ApolloProvider>
  ) : null;
};

import React from 'react';
import {ApolloProvider} from 'react-apollo';

import TodoList from './src/screens/TodoList';
import api from './src/store/api';

export default () => {
  return (
    <ApolloProvider client={api}>
      <TodoList />
    </ApolloProvider>
  );
};

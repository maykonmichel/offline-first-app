import React, {memo, useCallback} from 'react';
import {FlatList, Image, View} from 'react-native';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';

import styles from './styles';
import logo from '../../assets/images/logo.png';

import NewTodo from '../../components/NewTodo';
import Todo from '../../components/Todo';

const ADD_TODO = gql`
  mutation($description: String!) {
    addTodo(description: $description) {
      id
      description
    }
  }
`;

const LOAD_TODO_LIST = gql`
  query {
    todoList {
      id
      description
    }
  }
`;

export default memo(() => {
  const {data: {todoList} = {}, refetch} = useQuery(LOAD_TODO_LIST);

  const [addTodo] = useMutation(ADD_TODO);

  const onDeleteTodo = useCallback(() => {}, []);

  const onSave = useCallback(
    async description => {
      await addTodo({variables: {description}});
      await refetch();
    },
    [addTodo, refetch],
  );

  const renderItem = useCallback(
    ({item}) => <Todo onDelete={onDeleteTodo} todo={item} />,
    [onDeleteTodo],
  );

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.list}>
        <NewTodo onSave={onSave} />
        <FlatList data={todoList} renderItem={renderItem} />
      </View>
    </View>
  );
});

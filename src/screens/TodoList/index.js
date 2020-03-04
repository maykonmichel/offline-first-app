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

const DELETE_TODO = gql`
  mutation($id: ID!) {
    deleteTodo(id: $id) {
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
  const [deleteTodo] = useMutation(DELETE_TODO);

  const onDeleteTodo = useCallback(
    async id => {
      await deleteTodo({variables: {id}});
      await refetch();
    },
    [deleteTodo, refetch],
  );

  const onSave = useCallback(
    async description => {
      await addTodo({
        variables: {description},
        optimisticResponse: {
          __typename: 'Mutation',
          addTodo: {
            __typename: 'Todo',
            id: new Date().getTime().toString(),
            description,
          },
        },
        update: (cache, {data: {addTodo: addedTodo}}) => {
          const {todoList: cachedTodoList} = cache.readQuery({
            query: LOAD_TODO_LIST,
          });

          cache.writeQuery({
            query: LOAD_TODO_LIST,
            data: {
              todoList: [...cachedTodoList, addedTodo],
            },
          });
        },
      });
    },
    [addTodo],
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

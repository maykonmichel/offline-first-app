import React, {memo, useCallback} from 'react';
import {FlatList, Image, View} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import styles from './styles';
import logo from '../../assets/images/logo.png';

import NewTodo from '../../components/NewTodo';
import Todo from '../../components/Todo';

const LOAD_TODO_LIST = gql`
  query {
    todoList {
      id
      description
    }
  }
`;

export default memo(() => {
  const {data: {todoList} = {}} = useQuery(LOAD_TODO_LIST);

  const onDeleteTodo = useCallback(() => {}, []);

  const onSave = useCallback(() => {}, []);

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

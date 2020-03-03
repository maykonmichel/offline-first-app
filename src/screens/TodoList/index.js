import React, {memo, useCallback} from 'react';
import {FlatList, Image, View} from 'react-native';

import styles from './styles';
import logo from '../../assets/images/logo.png';

import NewTodo from '../../components/NewTodo';
import Todo from '../../components/Todo';

const todoList = [
  {
    id: '1',
    description: 'First todo',
  },
  {
    id: '2',
    description: 'Second todo',
  },
  {
    id: '3',
    description: 'Third one',
  },
];

export default memo(() => {
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

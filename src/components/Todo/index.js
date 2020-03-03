import React, {memo, useCallback} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Todo = memo(({todo: {description}}) => {
  const onDelete = useCallback(() => {
    Alert.alert('Completar tarefa?', null, [{text: 'Não'}, {text: 'Sim'}]);
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onDelete}>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
});

export default Todo;

import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Todo = memo(({todo: {description}}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
});

export default Todo;

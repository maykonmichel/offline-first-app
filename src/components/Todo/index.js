import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Todo = memo(({todo: {description}}) => {
  return (
    <TouchableOpacity>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
});

export default Todo;

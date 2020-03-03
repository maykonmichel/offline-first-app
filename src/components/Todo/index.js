import React, {memo, useCallback} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

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

Todo.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string,
  }),
};

Todo.defaultProps = {
  todo: {
    description: '',
  },
};

export default Todo;

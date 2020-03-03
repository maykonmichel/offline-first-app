import React, {memo, useCallback} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Todo = memo(({onDelete, todo: {id, description}}) => {
  const onPress = useCallback(() => {
    Alert.alert('Completar tarefa?', null, [
      {text: 'Não'},
      {text: 'Sim', onPress: () => onDelete(id)},
    ]);
  }, [id, onDelete]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
});

Todo.propTypes = {
  onDelete: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
  }),
};

Todo.defaultProps = {
  onDelete: () => {},
  todo: {
    id: '0',
    description: '',
  },
};

export default Todo;

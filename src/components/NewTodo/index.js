import React, {memo, useCallback, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const NewTodo = memo(({onSave}) => {
  const [value, setValue] = useState('');

  const onPress = useCallback(() => onSave(value), [onSave, value]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
});

NewTodo.propTypes = {
  onSave: PropTypes.func,
};

NewTodo.defaultProps = {
  onSave: () => {},
};

export default NewTodo;

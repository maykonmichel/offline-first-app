import React, {memo} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';

export default memo(() => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
});

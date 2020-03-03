import React, {memo} from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';

export default memo(() => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
});

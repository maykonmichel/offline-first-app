import React, {memo} from 'react';
import {View} from 'react-native';

import styles from './styles';

export default memo(() => {
  return <View style={styles.container} />;
});

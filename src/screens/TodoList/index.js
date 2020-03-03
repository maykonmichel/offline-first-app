import React, {memo} from 'react';
import {Image, View} from 'react-native';

import styles from './styles';
import logo from '../../assets/images/logo.png';

export default memo(() => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
});

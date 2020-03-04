import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {persistCache} from 'apollo-cache-persist';

import api, {cache} from './api';

export default () => {
  const [cachePersisted, setCachePersisted] = useState(false);

  useEffect(() => {
    (async () => {
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      setCachePersisted(true);
    })();
  }, []);

  return cachePersisted && api;
};

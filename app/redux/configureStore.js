// @flow
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';

export default () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['torch', 'settings'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware());

  const persistor = persistStore(store);

  return { store, persistor };
};

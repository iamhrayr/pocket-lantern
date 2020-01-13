// @flow
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['torch.activeOption', 'settings'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // redux developer tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

// @flow
import React, { useEffect, useCallback } from 'react';
import { AppState } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'App/redux/store';
import AppNavigator from 'App/navigator/AppNavigator';
import theme from 'App/theme';

const App = (): React$Node => {
  // const handleAppStateChange = useCallback(nextAppState => {
  //   if (nextAppState === 'active') {
  //     console.log('App has come to the foreground!');
  //   } else {
  //     console.log('App -> background!');
  //   }
  // }, []);

  // useEffect(() => {
  //   AppState.addEventListener('change', handleAppStateChange);

  //   return () => AppState.removeEventListener('change', handleAppStateChange);
  // }, [handleAppStateChange]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

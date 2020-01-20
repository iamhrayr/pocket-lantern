// @flow
import React, { memo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { store, persistor } from 'App/redux/store';
import AppNavigator from 'App/navigator/AppNavigator';
import theme from 'App/theme';
import Container from 'App/components/Container';

const App = (): React$Node => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Container />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default memo<{}>(App);

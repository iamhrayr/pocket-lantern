// @flow
import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'App/redux/store';
import AppNavigator from 'App/navigator/AppNavigator';
import theme from 'App/theme';

const App = (): React$Node => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default memo<{}>(App);

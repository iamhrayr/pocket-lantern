// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';

// import RootScreen from 'App/screens/Root';
import AppNavigator from 'App/navigator/AppNavigator';

import theme from './theme';

const App = (): React$Node => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;

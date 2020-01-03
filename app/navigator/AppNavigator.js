// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'App/screens/Home';
import SettingsScreen from 'App/screens/Settings';
import routes from './routes';

const AppNavigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: HomeScreen,
    },
    [routes.SETTINGS]: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: routes.HOME,
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AppNavigator);

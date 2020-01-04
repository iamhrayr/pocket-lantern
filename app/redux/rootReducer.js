import { combineReducers } from 'redux';

import settingsReducer from './ducks/settings';
import torchReducer from './ducks/torch';

export default combineReducers({
  settings: settingsReducer,
  torch: torchReducer,
});

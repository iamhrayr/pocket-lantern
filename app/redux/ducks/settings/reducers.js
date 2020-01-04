import { handleActions } from 'redux-actions';
import * as types from './types';

const defaultState = {
  turnOnTorchOnStartup: false,
  turnOffTorchOnExit: false,
  saveLastChoosenOption: false,
};

export default handleActions(
  {
    [types.SAVE_SETTINGS]: (state, action) => ({
      counter: state.counter + action.payload,
    }),
  },
  defaultState,
);

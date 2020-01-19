import { handleActions } from 'redux-actions';
import * as types from './types';
import { STROBE_DURATION, MORSE_DURATIONS } from 'App/constants';

const defaultState = {
  turnOnWhenStarts: false,
  turnOffWhenCloses: false,
  saveLastChoosenOption: false,
  morseLongDuration: MORSE_DURATIONS.LONG,
  morseShortDuration: MORSE_DURATIONS.SHORT,
  morsePauseDuration: MORSE_DURATIONS.PAUSE,
  strobeDuration: STROBE_DURATION,
};

export default handleActions(
  {
    [types.CHANGE_SETTINGS]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [types.RESET_SETTINGS]: (state, action) => ({
      ...defaultState,
    }),
  },
  defaultState,
);

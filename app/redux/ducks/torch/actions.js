// @flow
import { createAction } from 'redux-actions';

import {
  SET_ACTIVE_OPTION,
  TORCH_TOGGLE,
  TORCH_TURN_ON,
  TORCH_TURN_OFF,
  SET_MORSE_TEXT,
} from './types';

export const setActiveOption = createAction(SET_ACTIVE_OPTION);
export const torchToggle = createAction(TORCH_TOGGLE);
export const torchTurnOn = createAction(TORCH_TURN_ON);
export const torchTurnOff = createAction(TORCH_TURN_OFF);
export const setMorseText = createAction(SET_MORSE_TEXT);

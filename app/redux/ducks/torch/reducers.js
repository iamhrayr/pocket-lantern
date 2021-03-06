import { handleActions } from 'redux-actions';
import * as types from './types';
import { LIGHT_TYPES } from 'App/constants';

const defaultState = {
  activeOption: LIGHT_TYPES.TORCH,
  isTorchActive: false,
  morseText: 'sample',
};

export default handleActions(
  {
    [types.SET_ACTIVE_OPTION]: (state, action) => ({
      ...state,
      activeOption: action.payload,
      isTorchActive: false,
    }),
    [types.TORCH_TURN_ON]: (state, action) => ({
      ...state,
      isTorchActive: true,
    }),
    [types.TORCH_TURN_OFF]: (state, action) => ({
      ...state,
      isTorchActive: false,
    }),
    [types.TORCH_TOGGLE]: (state, action) => ({
      ...state,
      isTorchActive: !state.isTorchActive,
    }),
    [types.SET_MORSE_TEXT]: (state, action) => ({
      ...state,
      morseText: action.payload,
    }),
  },
  defaultState,
);

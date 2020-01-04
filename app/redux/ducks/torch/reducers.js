import { handleActions } from 'redux-actions';
import * as types from './types';
import { LIGHT_TYPES } from 'App/constants';

const defaultState = {
  activeOption: LIGHT_TYPES.TORCH,
};

export default handleActions(
  {
    [types.SET_ACTIVE_OPTION]: (state, action) => ({
      ...state,
      activeOption: action.payload,
    }),
  },
  defaultState,
);

import { createAction } from 'redux-actions';

import { CHANGE_SETTINGS, RESET_SETTINGS } from './types';

export const changeSettings = createAction(CHANGE_SETTINGS);
export const resetSettings = createAction(RESET_SETTINGS);

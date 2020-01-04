import { createAction } from 'redux-actions';

import { SAVE_SETTINGS } from './types';

export const saveSettings = createAction(SAVE_SETTINGS);

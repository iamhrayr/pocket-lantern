// @flow
import { takeLatest, put } from 'redux-saga/effects';

import * as types from './types';

// worker Sagas
function* fetchSkillsHandler(action) {
  // yield put('types.FETCH_SKILLS');
}

// watchers
export default function* watcherSaga(): Iterable<any> {
  // yield takeLatest('types.FETCH_SKILLS', fetchSkillsHandler);
}

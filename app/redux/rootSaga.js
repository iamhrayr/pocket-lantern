// @flow
import { all, call } from 'redux-saga/effects';

import { torchSagas } from './ducks/torch';

export default function* rootSaga(): Iterable<any> {
  yield all([torchSagas()]);
  // yield all([call(torchSagas)]);
}

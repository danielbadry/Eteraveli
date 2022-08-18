import { all, fork } from "redux-saga/effects";

import filmSaga from "../films/sagas";

export function* rootSaga() {
  yield all([fork(filmSaga)]);
}

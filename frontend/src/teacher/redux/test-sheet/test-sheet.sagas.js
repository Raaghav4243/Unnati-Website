import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchTestSheetSuccess } from './test-sheet.actions';
import { testSheetTypes } from './test-sheet.types';

export function* fetchTestStartAsync({
  payload: { responseSheetId, courseId },
}) {
  try {
    let test = yield fetch(`/api/requestTestEvaluate/${responseSheetId}`);
    test = yield test.json();
    yield put(fetchTestSheetSuccess(test.data, courseId));
  } catch (error) {}
}

export function* fetchTestSheetStart() {
  yield takeLatest(
    testSheetTypes.FETCH_SUBMITTED_TEST_START,
    fetchTestStartAsync
  );
}

export function* testSheetSagas() {
  yield all([call(fetchTestSheetStart)]);
}

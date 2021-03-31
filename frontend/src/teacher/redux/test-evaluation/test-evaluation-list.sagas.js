import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectUserCafeId } from '../cafe/cafe.selectors';
import {
  fetchTestListForEvaluationFailure,
  fetchTestListForEvaluationSuccess,
  updateTestScoreSuccess,
  updateTestScoreFailure,
} from './test-evaluation-list.actions';
import { TestEvaluationType } from './test-evaluation-list.types';

export function* fetchTestListAsync() {
  try {
    const cafeId = yield select(selectUserCafeId);

    let testList = yield fetch(`/api/loadPendingEvaluations/${cafeId}`);
    testList = yield testList.json();

    yield put(fetchTestListForEvaluationSuccess(testList.pendingEvaluations));
  } catch (error) {
    yield put(fetchTestListForEvaluationFailure(error));
  }
}

export function* updateTestScoreStartAsync({
  payload: { studentId, courseId, testId, data },
}) {
  try {
    yield fetch(
      `/api/evaluateTest/student/${studentId}/course/${courseId}/test/${testId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("fees updated", data);
      });

    yield put(updateTestScoreSuccess('score updated'));
  } catch (error) {
    yield put(updateTestScoreFailure(error));
  }
}

export function* fetchTestListForEvaluationStart() {
  yield takeLatest(
    TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_START,
    fetchTestListAsync
  );
}

export function* updateTestScoreStart() {
  yield takeLatest(
    TestEvaluationType.SUBMIT_TEST_SCORE_START,
    updateTestScoreStartAsync
  );
}

export function* testListForEvaluationSagas() {
  yield all([
    call(fetchTestListForEvaluationStart),
    call(updateTestScoreStart),
  ]);
}

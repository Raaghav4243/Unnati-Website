import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import {
  fetchTestStart,
  fetchTestSuccess,
  fetchTestFailure,
  submitTestSuccess,
  submitTestFailure,
} from './testpage.actions';

import { selectCurrentUserId } from '../user/user.selectors';

import TestPageActionTypes from './testpage.types';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
} from '../student/student.selectors';

export function* fetchTestAsync() {
  try {
    const userId = yield select(selectCurrentUserId);
    const courseId = yield select(selectCurrentCourseId);
    const testId = yield select(selectCurrentCourseTopicId);

    let courseTestDetails = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/test/${testId}`
    );

    courseTestDetails = yield courseTestDetails.json();

    // console.log('courseTestDetails are ', courseTestDetails);

    courseTestDetails.done
      ? yield put(fetchTestSuccess(courseTestDetails))
      : yield put(fetchTestFailure(courseTestDetails.message));
  } catch (error) {
    yield put(fetchTestFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* submitTestStartAsync({ payload: { data } }) {
  try {
    const userId = yield select(selectCurrentUserId);
    const testId = yield select(selectCurrentCourseTopicId);
    const courseId = yield select(selectCurrentCourseId);

    // first making post request for all questions individually
    // console.log('DATA RECEIVED INSIDE SAGE IS', data);
    // console.log('TEST ID RECEIVED IS', testId);

    const questionPromises = data.map((questionAndUserResponse, index) => {
      // console.log('SUBMITTING ANSWER for Q: ', index);
      let questionId = questionAndUserResponse[0];
      let userResponseArray = questionAndUserResponse[1];
      return fetch(
        `/api/submit-response/user/${userId}/test/${testId}/question/${questionId}`,
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ response: userResponseArray }),
        }
      );
    });

    const result = yield all(questionPromises);

    let testSubmittedMessage = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/test/${testId}`,
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Random: 7 }),
      }
    );
    testSubmittedMessage = yield testSubmittedMessage.json();

    // console.log('testSubmittedMessage is ', testSubmittedMessage);

    testSubmittedMessage.done
      ? yield put(submitTestSuccess('TEST SUBMITTED SUCCESSFULLY!'))
      : yield put(submitTestFailure('TEST SUBMISSION FAILED'));

    // yield fetch(
    //   `/enrolled-course/${userId}/course/${courseId}/test/${testId}`,
    //   {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   });

    // yield put(submitTestSuccess('test submitted'));
  } catch (error) {
    yield put(submitTestFailure('TEST COULDNOT BE SUBMITTED'));
  }
}

export function* fetchTestAgain() {
  yield put(fetchTestStart());
}

export function* onSubmittingTest() {
  yield takeLatest(TestPageActionTypes.SUBMIT_TEST_SUCCESS, fetchTestAgain);
}
export function* onfetchTestStart() {
  yield takeLatest(TestPageActionTypes.FETCH_TEST_START, fetchTestAsync);
}

export function* submitTestStart() {
  yield takeLatest(TestPageActionTypes.SUBMIT_TEST_START, submitTestStartAsync);
}

export function* testSagas() {
  yield all([
    call(onfetchTestStart),
    call(submitTestStart),
    call(onSubmittingTest),
  ]);
}

// export function* testSagas() {
//   yield all([call(fetchTestStart)]);
// }

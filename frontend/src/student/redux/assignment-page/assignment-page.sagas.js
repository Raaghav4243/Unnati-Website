import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import {
  fetchAssignmentSuccess,
  fetchAssignmentFailure,
  submitAssignmentSuccess,
  submitAssignmentFailure,
} from './assignment-page.actions';
import { selectCurrentUserId } from '../user/user.selectors';
import AssignmentPageActionTypes from './assignment-page.types';
// import { selectAssignmentId } from "./assignment-page.selectors";
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
} from '../student/student.selectors';

export function* fetchAssignmentAsync() {
  try {
    const userId = yield select(selectCurrentUserId);
    const courseId = yield select(selectCurrentCourseId);
    const assignmentId = yield select(selectCurrentCourseTopicId);

    let courseAssignmentDetails = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/assignment/${assignmentId}`
    );

    courseAssignmentDetails = yield courseAssignmentDetails.json();

    courseAssignmentDetails.done
      ? yield put(fetchAssignmentSuccess(courseAssignmentDetails))
      : yield put(fetchAssignmentFailure(courseAssignmentDetails.message));
  } catch (error) {
    yield put(fetchAssignmentFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* submitAssignmentStartAsync({ payload: { data } }) {
  try {
    const userId = yield select(selectCurrentUserId);
    const assignmentId = yield select(selectCurrentCourseTopicId);
    const courseId = yield select(selectCurrentCourseId);
    let assignmentSubmittedMessage = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/assignment/${assignmentId}`,
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    assignmentSubmittedMessage = yield assignmentSubmittedMessage.json();

    // console.log('assignmentSubmittedMessage is ', assignmentSubmittedMessage);

    assignmentSubmittedMessage.done
      ? yield put(submitAssignmentSuccess('assignment submitted'))
      : yield put(submitAssignmentFailure('ASSIGNMENT COULDNOT BE SUBMITTED'));

    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // });

    // yield put(submitAssignmentSuccess('assignment submitted'));
  } catch (error) {
    yield put(submitAssignmentFailure('ASSIGNMENT COULDNOT BE SUBMITTED'));
  }
}

// export function* fetchAssignmentAgain() {
//   yield put(fetchAssignmentStart());
// }

// export function* onSubmittingAssignment() {
//   yield takeLatest(
//     AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS,
//     fetchAssignmentAgain
//   );
// }

export function* onFetchAssignmentStart() {
  yield takeLatest(
    AssignmentPageActionTypes.FETCH_ASSIGNMENT_START,
    fetchAssignmentAsync
  );
}

export function* submitAssignmentStart() {
  yield takeLatest(
    AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_START,
    submitAssignmentStartAsync
  );
}

export function* assignmentSagas() {
  yield all([
    call(onFetchAssignmentStart),
    call(submitAssignmentStart),
    // call(onSubmittingAssignment),
  ]);
}

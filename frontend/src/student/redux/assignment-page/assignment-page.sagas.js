import { takeLatest, put, all, call, select } from "redux-saga/effects";

import {
  fetchAssignmentSuccess,
  fetchAssignmentFailure,
  submitAssignmentSuccess,
} from "./assignment-page.actions";
import {selectCurrentUserId} from '../user/user.selectors'
import AssignmentPageActionTypes from "./assignment-page.types";
import { selectAssignmentId } from "./assignment-page.selectors";
import { selectCurrentCourseId, selectCurrentCourseTopicId } from "../student/student.selectors";

export function* fetchAssignmentAsync({
  payload: { user_id, course_id, assignment_id },
}) {
  try {
    let courseAssignmentDetails = yield fetch(
      `/enrolled-course/${user_id}/course/${course_id}/assignment/${assignment_id}`
    );

    courseAssignmentDetails = yield courseAssignmentDetails.json();

    console.log("courseAssignmentDetails are ", courseAssignmentDetails);

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

export function* submitStartAsync({
  payload: {data}
}) {
  try {
    const userId = yield select(selectCurrentUserId)
    const assignmentId = yield select(selectCurrentCourseTopicId)
    const courseId = yield select(selectCurrentCourseId)
      yield fetch(`/enrolled-course/${userId}/course/${courseId}/assignment/5fdaecf25aa95631647c4089`, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })

      yield put (submitAssignmentSuccess('assignment submitted'))
  } catch (error) {
      
  }
}

export function* fetchAssignmentStart() {
  yield takeLatest(
    AssignmentPageActionTypes.FETCH_ASSIGNMENT_START,
    fetchAssignmentAsync
  );
}

export function* submitAssignmentStart() {
  yield takeLatest(
    AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_START,
    submitStartAsync
  );
}

export function* assignmentSagas() {
  yield all([call(fetchAssignmentStart), call(submitAssignmentStart)]);
}

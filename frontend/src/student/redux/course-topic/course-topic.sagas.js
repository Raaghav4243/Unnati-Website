import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { selectCurrentCourseId } from '../student/student.selectors';
import { selectCurrentUserId } from '../user/user.selectors';

import {
  fetchCourseTopicsStart,
  fetchCourseTopicsSuccess,
  fetchCourseTopicsFailure,
  viewedLectureForFirstTimeSuccess,
  viewedLectureForFirstTimeFailure,
} from './course-topic.actions';

import StudentActionTypes from '../student/student.types';
import CourseTopicActionTypes from './course-topic.types';
import AssignmentPageActionTypes from '../assignment-page/assignment-page.types';
import TestPageActionTypes from '../testpage/testpage.types';
export function* fetchCourseTopicsAsync() {
  try {
    const userId = yield select(selectCurrentUserId);
    const courseId = yield select(selectCurrentCourseId);
    // console.log(
    //   'FETCHING COURSE TOPICS USING',
    //   userId,
    //   'user',
    //   courseId,
    //   'course'
    // );
    // console.log(
    //   'WAS PREVIOUSLY FETCHING COURSE TOPICS USING',
    //   user_id,
    //   'user',
    //   course_id,
    //   'course'
    // );
    let CourseTopicsAndCompletionDetails = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}`
    );

    CourseTopicsAndCompletionDetails = yield CourseTopicsAndCompletionDetails.json();

    // console.log(
    //   'CourseTopicsAndCompletionDetails are ',
    //   CourseTopicsAndCompletionDetails
    // );

    CourseTopicsAndCompletionDetails.done
      ? yield put(fetchCourseTopicsSuccess(CourseTopicsAndCompletionDetails))
      : yield put(
          fetchCourseTopicsFailure('Course Topics Backend call failed')
        );
  } catch (error) {
    yield put(fetchCourseTopicsFailure(error));
  }
}

export function* viewedLectureForFirstTimeAsync({ payload: { lectureId } }) {
  try {
    const userId = yield select(selectCurrentUserId);
    const courseId = yield select(selectCurrentCourseId);
    // console.log(
    //   'VIEWED LECTURE FOR FIRST TIME CALL MADE USING',
    //   userId,
    //   'user',
    //   courseId,
    //   'course',
    //   lectureId,
    //   'lecture'
    // );

    let viewedLectureForFirstTimeMessage = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/lecture/${lectureId}`,
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Random: 7 }),
      }
    );

    viewedLectureForFirstTimeMessage = yield viewedLectureForFirstTimeMessage.json();

    // console.log(
    //   'viewedLectureForFirstTimeMessage is ',
    //   viewedLectureForFirstTimeMessage
    // );

    viewedLectureForFirstTimeMessage.done
      ? yield put(
          viewedLectureForFirstTimeSuccess(viewedLectureForFirstTimeMessage)
        )
      : yield put(
          viewedLectureForFirstTimeFailure('Course Topics Backend call failed')
        );
  } catch (error) {
    yield put(viewedLectureForFirstTimeFailure(error));
  }
}

// on set current course, fetch course topics start

export function* fetchCourseTopicsOnOtherActions() {
  yield put(fetchCourseTopicsStart());
}

export function* onSetCurrentCourse() {
  yield takeLatest(
    StudentActionTypes.SET_CURRENT_COURSE,
    fetchCourseTopicsOnOtherActions
  );
}

export function* onfetchCourseTopicsStart() {
  yield takeLatest(
    CourseTopicActionTypes.FETCH_COURSE_TOPICS_START,
    fetchCourseTopicsAsync
  );
}

export function* OnAssignmentSubmitSuccess() {
  yield takeLatest(
    AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS,
    fetchCourseTopicsOnOtherActions
  );
}

export function* OnTestSubmitSuccess() {
  yield takeLatest(
    TestPageActionTypes.SUBMIT_TEST_SUCCESS,
    fetchCourseTopicsOnOtherActions
  );
}

export function* OnViewedLectureForFirstTimeSuccess() {
  yield takeLatest(
    CourseTopicActionTypes.VIEWED_LECTURE_FOR_FIRST_TIME_SUCCESS,
    fetchCourseTopicsOnOtherActions
  );
}

export function* viewedLectureForFirstTimeStart() {
  yield takeLatest(
    CourseTopicActionTypes.VIEWED_LECTURE_FOR_FIRST_TIME_START,
    viewedLectureForFirstTimeAsync
  );
}

export function* courseTopicSagas() {
  yield all([
    call(onfetchCourseTopicsStart),
    call(onSetCurrentCourse),
    call(OnAssignmentSubmitSuccess),
    call(OnTestSubmitSuccess),
    call(OnViewedLectureForFirstTimeSuccess),
    call(viewedLectureForFirstTimeStart),
  ]);
}

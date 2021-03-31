import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import {
  fetchCourseForOverviewSuccess,
  fetchCourseForOverviewFailure,
} from './course-overview.actions';

import CourseOverviewActionTypes from './course-overview.types';

import { selectCurrentCourseOverviewId } from '../course-overview/course-overview.selectors';
import { selectAllCourses } from '../allCourses/all-courses.selectors';

// import { selectCurrentUserId } from '../user/user.selectors';

// import { selectAssignmentId } from './assignment-page.selectors';
// import {
//   selectCurrentCourseId,
//   selectCurrentCourseTopicId,
// } from '../student/student.selectors';

export function* fetchCourseForOverviewAsync() {
  try {
    const currentCourseOverviewId = yield select(selectCurrentCourseOverviewId);
    const allCourses = yield select(selectAllCourses);
    if (allCourses && currentCourseOverviewId) {
      try {
        const CourseOverviewDetails = allCourses.find(
          (course) => course._id === currentCourseOverviewId
        );

        // console.log('Course Overview Object is ', CourseOverviewDetails);

        CourseOverviewDetails
          ? yield put(fetchCourseForOverviewSuccess(CourseOverviewDetails))
          : yield put(fetchCourseForOverviewFailure("Course Doesn't Exist..."));
      } catch (error) {
        yield put(fetchCourseForOverviewFailure(error));
      }
    } else {
      yield put(
        fetchCourseForOverviewFailure(
          "Sorry we couldn't find courses for you..."
        )
      );
    }
  } catch (error) {
    yield put(fetchCourseForOverviewFailure(error));
  }
}

export function* fetchCourseForOverviewStart() {
  yield takeLatest(
    CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_START,
    fetchCourseForOverviewAsync
  );
}

export function* courseOverviewSagas() {
  yield all([call(fetchCourseForOverviewStart)]);
}

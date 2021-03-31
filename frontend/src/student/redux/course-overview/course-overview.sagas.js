import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import {
  fetchCourseForOverviewStart,
  fetchCourseForOverviewSuccess,
  fetchCourseForOverviewFailure,
  fetchCourseForOverviewForHomeStart,
  fetchCourseForOverviewForHomeSuccess,
  fetchCourseForOverviewForHomeFailure,
} from './course-overview.actions';

import CourseOverviewActionTypes from './course-overview.types';

import { selectCurrentCourseOverviewId } from '../course-overview/course-overview.selectors';
import { selectAllCourses } from '../allCourses/all-courses.selectors';
import { selectCurrentUserCafeId } from '../user/user.selectors';

// import { selectCurrentUserId } from '../user/user.selectors';

// import { selectAssignmentId } from './assignment-page.selectors';
// import {
//   selectCurrentCourseId,
//   selectCurrentCourseTopicId,
// } from '../student/student.selectors';

export function* fetchCourseForOverviewAsync() {
  try {
    const currentCourseOverviewId = yield select(selectCurrentCourseOverviewId);
    const cafeId = yield select(selectCurrentUserCafeId);

    let courseOverviewDetails = yield fetch(
      `/api/cafe/${cafeId}/coursedetail/${currentCourseOverviewId}`
    );

    courseOverviewDetails = yield courseOverviewDetails.json();

    // console.log('courseOverviewDetails are ', courseOverviewDetails);

    courseOverviewDetails.done
      ? yield put(fetchCourseForOverviewSuccess(courseOverviewDetails))
      : yield put(fetchCourseForOverviewFailure(courseOverviewDetails.message));
  } catch (error) {
    yield put(fetchCourseForOverviewFailure(error));
  }
}

export function* fetchCourseForOverviewForHomeAsync() {
  try {
    const currentCourseOverviewId = yield select(selectCurrentCourseOverviewId);
    const allCourses = yield select(selectAllCourses);
    if (allCourses && currentCourseOverviewId) {
      try {
        const courseOverviewDetails = allCourses.find(
          (course) => course._id === currentCourseOverviewId
        );

        // console.log('courseOverviewDetails is ', courseOverviewDetails);

        let courseOverviewFeesDetails = yield fetch(
          `/api/course-fees/${currentCourseOverviewId}`
        );

        courseOverviewFeesDetails = yield courseOverviewFeesDetails.json();

        // console.log(
        //   'courseOverviewFeesDetails are ',
        //   courseOverviewFeesDetails
        // );

        let courseDetailsObject = {};

        if (courseOverviewFeesDetails.done && courseOverviewDetails) {
          courseDetailsObject['generalDetails'] = courseOverviewDetails;
          courseDetailsObject['feesDetails'] = courseOverviewFeesDetails;
        }

        courseOverviewFeesDetails.done && courseOverviewDetails
          ? yield put(fetchCourseForOverviewForHomeSuccess(courseDetailsObject))
          : yield put(
              fetchCourseForOverviewForHomeFailure(
                courseOverviewFeesDetails.message
              )
            );
      } catch (error) {
        yield put(fetchCourseForOverviewForHomeFailure(error));
      }
    } else {
      yield put(
        fetchCourseForOverviewForHomeFailure(
          "Sorry we couldn't find courses for you..."
        )
      );
    }
  } catch (error) {
    yield put(fetchCourseForOverviewForHomeFailure(error));
  }
}

export function* fetchCourseForOverviewStartOnSetCourseForOverview() {
  // console.log('Event listener for set course invoked');
  yield put(fetchCourseForOverviewStart());
}

export function* fetchCourseForOverviewForHomeStartOnSetCourseForOverviewForHome() {
  // console.log('Event listener for set course invoked');
  yield put(fetchCourseForOverviewForHomeStart());
}

export function* fetchCourseForOverviewStartAsync() {
  yield takeLatest(
    CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_START,
    fetchCourseForOverviewAsync
  );
}

export function* fetchCourseForOverviewForHomeStartAsync() {
  yield takeLatest(
    CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FOR_HOME_START,
    fetchCourseForOverviewForHomeAsync
  );
}

export function* onSetCourseForOverview() {
  yield takeLatest(
    CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW,
    fetchCourseForOverviewStartOnSetCourseForOverview
  );
}

export function* onSetCourseForOverviewForHome() {
  yield takeLatest(
    CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW_FOR_HOME,
    fetchCourseForOverviewForHomeStartOnSetCourseForOverviewForHome
  );
}

export function* courseOverviewSagas() {
  yield all([
    call(fetchCourseForOverviewStartAsync),
    call(fetchCourseForOverviewForHomeStartAsync),
    call(onSetCourseForOverview),
    call(onSetCourseForOverviewForHome),
  ]);
}

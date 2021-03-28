import { all, call } from 'redux-saga/effects';

import { courseTopicSagas } from './course-topic/course-topic.sagas';
import { allCoursesSagas } from './allCourses/all-courses.sagas';
import { studentSagas } from './student/student.sagas';
import { testSagas } from './testpage/testpage.sagas';
import { assignmentSagas } from './assignment-page/assignment-page.sagas';
import { lectureSagas } from './lecture-page/lecture-page.sagas';
import { feeAmountSagas } from './fee-amount/fee-amount.sagas';
import { feeDetailSagas } from './fee-details/fee-details.sagas';
import { cafeSagas } from './cafe/cafe.sagas';
import { userSagas } from './user/user.sagas';
import { courseOverviewSagas } from './course-overview/course-overview.sagas';
import { verifiedStudentsSagas } from '../../teacher/redux/verified-students/verified-students.sagas';

import { courseAssignSagas } from '../../teacher/redux/course-assign/course-assign.sagas';
import { feeUpdateSagas } from '../../teacher/redux/fee-update/fee-update.sagas';
import { testListForEvaluationSagas } from '../../teacher/redux/test-evaluation/test-evaluation-list.sagas';
import { testSheetSagas } from '../../teacher/redux/test-sheet/test-sheet.sagas';

import { unverifiedStudentsSagas } from '../../teacher/redux/unverified-students/unverified-students.sagas';
export default function* rootSaga() {
  yield all([
    call(courseTopicSagas),
    call(allCoursesSagas),
    call(studentSagas),
    call(testSagas),
    call(feeAmountSagas),
    call(assignmentSagas),
    call(lectureSagas),
    call(feeDetailSagas),
    call(cafeSagas),
    call(userSagas),
    call(courseOverviewSagas),
    call(verifiedStudentsSagas),
    call(courseAssignSagas),
    call(feeUpdateSagas),
    call(testListForEvaluationSagas),
    call(testSheetSagas),
    call(unverifiedStudentsSagas),
  ]);
}

import { all, call } from 'redux-saga/effects';

import { courseTopicSagas } from './course-topic/course-topic.sagas';

import { testSagas } from './testpage/testpage.sagas';
import { assignmentSagas } from './assignment-page/assignment-page.sagas';
import { lectureSagas } from './lecture-page/lecture-page.sagas';
import { feeAmountSagas } from './fee-amount/fee-amount.sagas';
import { feeDetailSagas } from './fee-details/fee-details.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(courseTopicSagas),
    call(testSagas),
    call(feeAmountSagas),
    call(assignmentSagas),
    call(lectureSagas),
    call(feeDetailSagas),
    call(userSagas),
  ]);
}

import { all, call } from 'redux-saga/effects';

import { courseTopicSagas } from './course-topic/course-topic.sagas';

import { testSagas } from './testpage/testpage.sagas';
import {feeAmountSagas} from './fee-amount/fee-amount.sagas'

export default function* rootSaga() {
  yield all([call(courseTopicSagas), call(testSagas), call(feeAmountSagas)]);
}

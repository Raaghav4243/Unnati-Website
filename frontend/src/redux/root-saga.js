import { all, call } from 'redux-saga/effects';

import { courseTopicSagas } from './course-topic/course-topic.sagas';

export default function* rootSaga() {
  yield all([call(courseTopicSagas)]);
}

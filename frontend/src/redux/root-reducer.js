import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import cafeReducer from './cafe/cafe.reducers';
import courseReducer from './courses/courses.reducer';
import homePageReducer from './homepage/homepage.reducer';
import userReducer from './user/user.reducer';
import courseTopicReducer from './course-topic/course-topic.reducer';
import studentReducer from './student/student.reducer';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  homePage: homePageReducer,
  cafeDetails: cafeReducer,
  courseTopicsAndCompletionDetails: courseTopicReducer,
  student: studentReducer,
});

export default rootReducer;

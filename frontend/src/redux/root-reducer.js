import { combineReducers } from 'redux';
import cafeReducer from './cafe/cafe.reducers';
// import persistReducer from 'redux-persist/es/persistReducer';

import courseReducer from './courses/courses.reducer';
import homePageReducer from './homepage/homepage.reducer';
import userReducer from './user/user.reducer';
import courseTopicReducer from './course-topic/course-topic.reducer';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  homePage: homePageReducer,
  cafeDetails: cafeReducer,
  courseTopicsAndCompletionDetails: courseTopicReducer,
});

export default rootReducer;

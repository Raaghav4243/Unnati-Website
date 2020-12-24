import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import courseReducer from './courses/courses.reducer';
import homePageReducer from './homepage/homepage.reducer';
import userReducer from './user/user.reducer';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  homePage: homePageReducer,
});

export default rootReducer;

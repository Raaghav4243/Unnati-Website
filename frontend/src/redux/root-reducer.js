import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import courseReducer from './courses/courses.reducer';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  course: courseReducer,
});

export default rootReducer;

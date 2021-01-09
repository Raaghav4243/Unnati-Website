import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import cafeReducer from './cafe/cafe.reducers';
import userReducer from './user/user.reducer'
// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  user: userReducer,
  cafeDetails: cafeReducer,

});

export default rootReducer;

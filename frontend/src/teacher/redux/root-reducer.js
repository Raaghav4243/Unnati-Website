import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import cafeReducer from './cafe/cafe.reducers';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
 
  cafeDetails: cafeReducer,

});

export default rootReducer;

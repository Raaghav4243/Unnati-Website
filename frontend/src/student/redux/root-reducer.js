import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';

import cafeReducer from './cafe/cafe.reducers';
import allCoursesReducer from './allCourses/all-courses.reducer';
import homePageReducer from './homepage/homepage.reducer';
import userReducer from './user/user.reducer';
import courseTopicReducer from './course-topic/course-topic.reducer';
import feeReducer from './fee-details/fee-details.reducer';
import feeAmountReducer from './fee-amount/fee-amount.reducer';
import studentReducer from './student/student.reducer';
import testReducer from './testpage/testpage.reducer';
import assignmentReducer from './assignment-page/assignment-page.reducer';
import lectureReducer from './lecture-page/lecture-page.reducer';
import courseOverviewReducer from './course-overview/course-overview.reducer';
import verifiedStudentReducer from '../../teacher/redux/verified-students/verified-students.reducer';

// const persistCongfig = {
//     key: 'root'
// }

const rootReducer = combineReducers({
  user: userReducer,
  allCourses: allCoursesReducer,
  homePage: homePageReducer,
  cafeDetails: cafeReducer,
  courseTopicsAndCompletionDetails: courseTopicReducer,
  feeDetails: feeReducer,
  feeAmount: feeAmountReducer,
  student: studentReducer,
  test: testReducer,
  assignment: assignmentReducer,
  lecture: lectureReducer,
  courseOverview: courseOverviewReducer,
  verifiedStudent: verifiedStudentReducer
});

export default rootReducer;

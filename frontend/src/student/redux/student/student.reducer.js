import StudentActionTypes from './student.types';

const INITIAL_STATE = {
  isFetchingEnrolledCourses: false,
  user_enrolled_courses: null,
  user_enrolled_courses_id_map: null,
  percentStatusArray: null,
  // current_course_id: '5fa6bd6f4afbc52538b49afb',
  // current_course_id: '5fdb113d6ad31452f48233b9',
  current_course_id: null,
  current_topic_content_id: null,
  current_topic_content_type: null,
  current_topic_content_name: null,
  errorMessage: null,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.SET_CURRENT_COURSE:
      return {
        ...state,
        current_course_id: action.payload,
        current_topic_content_id: null,
        current_topic_content_type: null,
        current_topic_content_name: null,
      };
    case StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT:
      // console.log('This action is called');
      const {
        course_topic_content_id,
        course_topic_content_type,
        course_topic_content_name,
      } = action.payload;
      return {
        ...state,
        current_topic_content_id: course_topic_content_id,
        current_topic_content_type: course_topic_content_type,
        current_topic_content_name: course_topic_content_name,
      };
    case StudentActionTypes.FETCH_ENROLLED_COURSES_START:
      return {
        ...state,
        isFetchingEnrolledCourses: true,
      };
    case StudentActionTypes.FETCH_ENROLLED_COURSES_SUCCESS:
      const { userCourses, percentStatus } = action.payload;
      let enrolledCoursesIdMap = {};
      userCourses.forEach((courseEnrolled) => {
        enrolledCoursesIdMap[courseEnrolled.course._id] =
          courseEnrolled.course.courseName;
      });
      return {
        ...state,
        isFetchingEnrolledCourses: false,
        user_enrolled_courses: userCourses,
        user_enrolled_courses_id_map: enrolledCoursesIdMap,
        percentStatusArray: percentStatus,
      };
    case StudentActionTypes.FETCH_ENROLLED_COURSES_FAILURE:
      return {
        ...state,
        isFetchingEnrolledCourses: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;

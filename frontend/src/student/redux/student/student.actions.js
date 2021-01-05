import StudentActionTypes from './student.types';

export const setCurrentCourse = (course_id) => ({
  type: StudentActionTypes.SET_CURRENT_COURSE,
  payload: course_id,
});

export const setCurrentCourseTopicContent = (
  course_topic_content_id,
  course_topic_content_type,
  course_topic_content_name
) => ({
  type: StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT,
  payload: {
    course_topic_content_id,
    course_topic_content_type,
    course_topic_content_name,
  },
});

export const fetchEnrolledCoursesStart = (user_id) => {
  return {
    type: StudentActionTypes.FETCH_ENROLLED_COURSES_START,
    payload: {
      user_id: user_id,
    },
  };
};

export const fetchEnrolledCoursesSuccess = (enrolledCoursesDetails) => ({
  type: StudentActionTypes.FETCH_ENROLLED_COURSES_SUCCESS,
  payload: enrolledCoursesDetails,
});

export const fetchEnrolledCoursesFailure = (errorMessage) => ({
  type: StudentActionTypes.FETCH_ENROLLED_COURSES_FAILURE,
  payload: errorMessage,
});

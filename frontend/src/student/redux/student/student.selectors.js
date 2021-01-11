import { createSelector } from 'reselect';

const selectStudentDetails = (state) => state.student;

export const selectCurrentCourseId = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.current_course_id
);

export const selectCurrentCourseTopicId = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.current_topic_content_id
);

export const selectCurrentCourseTopicType = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.current_topic_content_type
);

export const selectCurrentCourseTopicName = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.current_topic_content_name
);

export const selectUserEnrolledCourses = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.user_enrolled_courses
);

export const selectUserEnrolledCoursesIdMap = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.user_enrolled_courses_id_map
);

export const selectPercentStatusForUserEnrolledCourses = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.percentStatusArray
);

export const selectIsFetchingEnrolledCourses = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.isFetchingEnrolledCourses
);

import StudentActionTypes from './student.types';

export const setCurrentCourse = (course_id) => ({
  type: StudentActionTypes.SET_CURRENT_COURSE,
  payload: course_id,
});

export const setCurrentCourseTopicContent = (
  course_topic_content_id,
  course_topic_content_type
) => {
  console.log(
    'course_topic_content_id is ',
    course_topic_content_id,
    'course_topic_content_type is ',
    course_topic_content_type
  );
  return {
    type: StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT,
    payload: { course_topic_content_id, course_topic_content_type },
  };
};

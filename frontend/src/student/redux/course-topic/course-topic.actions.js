import CourseTopicActionTypes from './course-topic.types';

export const fetchCourseTopicsStart = () => {
  // console.log(
  //   'User id inside start action' + user_id,
  //   'Course id inside start action' + course_id
  // );
  // console.log({ user_id: user_id, course_id: course_id });
  return {
    type: CourseTopicActionTypes.FETCH_COURSE_TOPICS_START,
    // payload: { user_id: user_id, course_id: course_id },
  };
};

export const fetchCourseTopicsSuccess = (
  courseTopicsAndUserCompletionDetails
) => ({
  type: CourseTopicActionTypes.FETCH_COURSE_TOPICS_SUCCESS,
  payload: courseTopicsAndUserCompletionDetails,
});

export const fetchCourseTopicsFailure = (errorMessage) => ({
  type: CourseTopicActionTypes.FETCH_COURSE_TOPICS_FAILURE,
  payload: errorMessage,
});

export const viewedLectureForFirstTimeStart = (lectureId) => {
  // console.log(
  //   'User id inside start action' + user_id,
  //   'Course id inside start action' + course_id
  // );
  // console.log({ user_id: user_id, course_id: course_id });
  return {
    type: CourseTopicActionTypes.VIEWED_LECTURE_FOR_FIRST_TIME_START,
    payload: { lectureId: lectureId },
  };
};

export const viewedLectureForFirstTimeSuccess = (postReqSuccessMessage) => ({
  type: CourseTopicActionTypes.VIEWED_LECTURE_FOR_FIRST_TIME_SUCCESS,
  payload: postReqSuccessMessage,
});

export const viewedLectureForFirstTimeFailure = (errorMessage) => ({
  type: CourseTopicActionTypes.VIEWED_LECTURE_FOR_FIRST_TIME_FAILURE,
  payload: errorMessage,
});

import LecturePageActionTypes from './lecture-page.types';

export const fetchLectureStart = (user_id, course_id, lecture_id) => {
  return {
    type: LecturePageActionTypes.FETCH_LECTURE_START,
    payload: {
      user_id: user_id,
      course_id: course_id,
      lecture_id: lecture_id,
    },
  };
};

export const fetchLectureSuccess = (courseLectureDetails) => ({
  type: LecturePageActionTypes.FETCH_LECTURE_SUCCESS,
  payload: courseLectureDetails,
});

export const fetchLectureFailure = (errorMessage) => ({
  type: LecturePageActionTypes.FETCH_LECTURE_FAILURE,
  payload: errorMessage,
});

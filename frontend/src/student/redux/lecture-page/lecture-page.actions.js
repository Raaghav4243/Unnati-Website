import LecturePageActionTypes from './lecture-page.types';

export const fetchLectureStart = () => {
  return {
    type: LecturePageActionTypes.FETCH_LECTURE_START,
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

export const ViewedLectureForFirstTime = (lectureId) => ({
  type: LecturePageActionTypes.FETCH_LECTURE_FAILURE,
  payload: lectureId,
});

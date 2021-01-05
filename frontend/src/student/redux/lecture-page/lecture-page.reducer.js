import LecturePageActionTypes from './lecture-page.types';

const INITIAL_STATE = {
  isFetching: false,
  lectureId: null,
  lectureName: null,
  youtube_id: null,
  notes_link: null,
  errorMessage: null,
};

const lectureReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LecturePageActionTypes.FETCH_LECTURE_START:
      return {
        ...state,
        isFetching: true,
        lectureId: null,
        lectureName: null,
        youtube_id: null,
        notes_link: null,
        errorMessage: null,
      };
    case LecturePageActionTypes.FETCH_LECTURE_SUCCESS:
      // const {
      //   test: { questions, _id, subjectName, testName, duration, maxMarks },
      //   message,
      // } = action.payload;

      const {
        lecture: { _id, youtubeId, name, notes },
      } = action.payload;
      return {
        ...state,
        isFetching: false,
        lectureId: _id,
        lectureName: name,
        youtube_id: youtubeId,
        notes_link: notes,
        errorMessage: null,
      };

    case LecturePageActionTypes.FETCH_LECTURE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default lectureReducer;

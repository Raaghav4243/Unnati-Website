import { createSelector } from 'reselect';

const selectLectureDetails = (state) => state.lecture;

export const selectLectureId = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.lectureId
);

export const selectLectureName = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.lectureName
);

export const selectLectureDriveId = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.driveId
);

export const selectLectureNotesLink = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.notes_link
);

export const selectIsLectureFetching = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.isFetching
);

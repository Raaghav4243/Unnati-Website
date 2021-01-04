import { createSelector } from 'reselect';

const selectLectureDetails = (state) => state.lecture;

export const selectLectureYoutubeId = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.youtube_id
);

export const selectLectureNotesLink = createSelector(
  [selectLectureDetails],
  (lectureDetails) => lectureDetails.notes_link
);

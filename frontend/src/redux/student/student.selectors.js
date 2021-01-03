import { createSelector } from 'reselect';

const selectStudentDetails = (state) => state.student;

export const selectCurrentCourseId = createSelector(
  [selectStudentDetails],
  (studentDetails) => studentDetails.current_course_id
);

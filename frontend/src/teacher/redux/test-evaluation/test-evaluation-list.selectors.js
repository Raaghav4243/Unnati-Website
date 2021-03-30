import { createSelector } from 'reselect';

const selectTestEvaluationList = (state) => state.testEvaluationList;

export const selectTestList = createSelector(
  [selectTestEvaluationList],
  (testlist) => testlist.pendingEvaluation
);

export const selectIsTestEvaluationFetching = createSelector(
  [selectTestEvaluationList],
  (testlist) => testlist.isUpdating
);

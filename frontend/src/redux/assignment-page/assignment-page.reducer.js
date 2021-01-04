import AssignmentPageActionTypes from './assignment-page.types';

const INITIAL_STATE = {
  isFetching: false,
  isAssignmentSubmitting: false,
  message: null,
  marksScored: null,
  assignmentId: null,
  assignmentName: null,
  duration: null,
  maxMarks: null,
  questions: null,
  attemptsLeft: null,
  errorMessage: null,
};

/*
 "assignment": {
        "questions": [
            {
                "correctAns": [
                    "test2"
                ],
                "options": [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ],
                "_id": "5fa6b84511ef256644d5afaf",
                "type": "SINGLECORRECT",
                "statement": "test question",
                "maxMarks": 10,
                "__v": 0
            },
            {
                "correctAns": [
                    "opt2"
                ],
                "options": [
                    "opt1",
                    "opt2",
                    "opt3",
                    "opt4"
                ],
                "_id": "5fdaeb7148414a30a80c3b94",
                "type": "SINGLECORRECT",
                "name": "dummy",
                "statement": "statementdummystatementdummystatementdummy",
                "maxMarks": 10,
                "__v": 0
            }
        ],
        "_id": "5fdaecf25aa95631647c4089",
        "subjectCode": "T1011",
        "subjectName": "Dummy",
        "assignmentName": "dummyass",
        "duration": 30,
        "maxMarks": 100,
        "__v": 0
    },
    "attemptsLeft": 3
*/

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_START:
      return {
        ...state,
        isFetching: true,
        isAssignmentSubmitting: false,
        message: null,
        marksScored: null,
        assignmentId: null,
        assignmentName: null,
        duration: null,
        maxMarks: null,
        questions: null,
        attemptsLeft: null,
        errorMessage: null,
      };
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_SUCCESS:
      // const {
      //   test: { questions, _id, subjectName, testName, duration, maxMarks },
      //   message,
      // } = action.payload;
      if (action.payload.message) {
        const { message, marksScored } = action.payload;
        return {
          ...state,
          isFetching: false,
          message: message,
          marksScored: marksScored,
        };
      } else {
        const {
          // test: { questions, _id, subjectName, testName, duration, maxMarks },
          assignment: {
            questions,
            _id,
            subjectName,
            assignmentName,
            duration,
            maxMarks,
          },
          attemptsLeft,
        } = action.payload;
        return {
          ...state,
          isFetching: false,
          assignmentId: _id,
          assignmentName: assignmentName,
          subjectName: subjectName,
          duration: duration,
          maxMarks: maxMarks,
          questions: questions,
          attemptsLeft: attemptsLeft,
        };
      }
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default assignmentReducer;

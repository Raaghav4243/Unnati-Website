// import { UserActionTypes } from './user.types';
import { TestPageActionTypes } from './testpage.types';

const INITIAL_STATE = {
  isFetching: false,
  questions: undefined,
  currentQuestionNo: 0,
  single_choice_response: null,
  multipe_choice_response: [],
  typed_response: '',
};

// test: {
//     questions: [
//       {
//         options: ['opt1', 'opt2', 'opt3', 'opt4'],
//         _id: '5fdaeba85aa95631647c4087',
//         type: 'MULTICORRECT',
//         name: 'dummy1',
//         statement: 'statement1dummystatementdummystatementdummy',
//         maxMarks: 10,
//         __v: 0,
//       },
//       {
//         options: [],
//         _id: '5fdaebd25aa95631647c4088',
//         type: 'TYPED',
//         name: 'dummy1',
//         statement: 'statement1dummystatementdummystatementdummy',
//         maxMarks: 10,
//         __v: 0,
//       },
//     ],
//     _id: '5fdb07df5aa95631647c408c',
//     subjectCode: 'T1012',
//     subjectName: 'Dummy3',
//     testName: 'dummytest12',
//     duration: 45,
//     maxMarks: 100,
//     createdAt: '2020-12-17T07:25:19.016Z',
//     __v: 0,
//   },

//   // set in front end
//
// }

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

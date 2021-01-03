import StudentActionTypes from './student.types';

const INITIAL_STATE = {
  current_course_id: '5fa6bd6f4afbc52538b49afb',
  current_topic_content_id: null,
  current_topic_content_type: null,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.SET_CURRENT_COURSE:
      return {
        ...state,
        current_course_id: action.payload,
      };
    case StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT:
      const {
        course_topic_content_id,
        course_topic_content_type,
      } = action.payload;
      return {
        ...state,
        current_topic_content_id: course_topic_content_id,
        course_topic_content_type: course_topic_content_type,
      };
    default:
      return state;
  }
};

export default studentReducer;

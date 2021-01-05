import StudentActionTypes from './student.types';

const INITIAL_STATE = {
  // current_course_id: '5fa6bd6f4afbc52538b49afb',
  current_course_id: '5fdb113d6ad31452f48233b9',
  current_topic_content_id: null,
  current_topic_content_type: null,
  current_topic_content_name: null,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.SET_CURRENT_COURSE:
      return {
        ...state,
        current_course_id: action.payload,
      };
    case StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT:
      console.log('This action is called');
      const {
        course_topic_content_id,
        course_topic_content_type,
        course_topic_content_name,
      } = action.payload;

      return {
        ...state,
        current_topic_content_id: course_topic_content_id,
        current_topic_content_type: course_topic_content_type,
        current_topic_content_name: course_topic_content_name,
      };

    default:
      return state;
  }
};

export default studentReducer;

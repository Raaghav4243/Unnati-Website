import HomePageActionTypes from './homepage.types';

const INITIAL_STATE = {
  sidenavIsHidden: true,
};

const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomePageActionTypes.TOGGLE_SIDENAV_HIDDEN:
      return {
        ...state,
        sidenavIsHidden: !state.sidenavIsHidden,
      };
    default:
      return state;
  }
};

export default homePageReducer;

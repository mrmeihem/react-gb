import { TOGGLE_PROFILE_CHECKBOX } from "./actions";

const initialState = {
  toggleProfileCheckbox: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_CHECKBOX: {
      return {
        ...state,
        toggleProfileCheckbox: !state.toggleProfileCheckbox,
      };
    }
    default:
      return state;
  }
};

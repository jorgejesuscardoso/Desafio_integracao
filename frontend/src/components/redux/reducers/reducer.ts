import { AnyAction } from "redux";

const initialState = false;

export const newPost = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_POST':
      return true;
    default:
      return state;
  }
};

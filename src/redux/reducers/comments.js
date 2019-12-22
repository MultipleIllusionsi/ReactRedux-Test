import { FETCH_COMMENTS } from "../actionTypes";

const INITIAL_STATE = [];

const comments = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS: {
      // return [...state, payload];
      return payload;
    }

    default:
      return state;
  }
};

export default comments;

import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE } from "../actionTypes";

// const INITIAL_STATE = [];
const INITIAL_STATE = { comments: [], error: null };

const comments = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS: {
      return { ...state, comments: payload };
    }

    case FETCH_COMMENTS_FAILURE: {
      return { ...state, error: payload };
    }

    default:
      return state;
  }
};

export default comments;

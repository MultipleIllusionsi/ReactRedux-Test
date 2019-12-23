import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE } from "../actionTypes";

const INITIAL_STATE = [];

const comments = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS: {
      return payload;
    }
    case FETCH_COMMENTS_FAILURE: {
      return { error: payload };
    }

    default:
      return state;
  }
};

export default comments;

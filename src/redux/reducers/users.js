import { FETCH_USERDATA } from "../actionTypes";

const INITIAL_STATE = [];

const users = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USERDATA: {
      return [...state, payload];
    }

    default:
      return state;
  }
};

export default users;

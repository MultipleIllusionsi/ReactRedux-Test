import { FETCH_USERDATA, FETCH_USERDATA_FAILURE } from "../actionTypes";

const INITIAL_STATE = [];

const users = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USERDATA: {
      return [...state, payload];
    }
    case FETCH_USERDATA_FAILURE: {
      return { users: [...state.users], error: payload };
    }
    default:
      return state;
  }
};

export default users;

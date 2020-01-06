import { FETCH_USERDATA, FETCH_USERDATA_FAILURE } from "../actionTypes";

const INITIAL_STATE = { users: [], error: null };

const users = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USERDATA: {
      return { ...state, users: [...state.users, payload] };
    }

    case FETCH_USERDATA_FAILURE: {
      return { ...state, error: payload };
    }

    default:
      return state;
  }
};

export default users;

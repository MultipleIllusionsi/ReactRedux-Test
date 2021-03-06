import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import posts from "./posts";
import users from "./users";
import comments from "./comments";

const persistConfig = {
  key: "567234523345",
  storage,
  whitelist: ["posts"]
};

const rootReducer = combineReducers({ posts, users, comments });

export default persistReducer(persistConfig, rootReducer);

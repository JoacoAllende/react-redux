import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  postsList: postsReducer,
  usersList: usersReducer,
  photosList: photosReducer,
});

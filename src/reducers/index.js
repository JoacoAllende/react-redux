import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";
import auth from "./auth";

export default combineReducers({
  postsList: postsReducer,
  usersList: usersReducer,
  photosList: photosReducer,
  isSignedIn: auth,
});

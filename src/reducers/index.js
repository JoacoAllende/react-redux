import { combineReducers } from "redux";

import posts from "./posts";
import users from "./users";
import photos from "./photos";
import auth from "./auth";

export default combineReducers({
  posts: posts,
  users: users,
  photos: photos,
  auth: auth,
});

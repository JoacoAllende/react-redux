import { all } from "redux-saga/effects";

import posts from "./posts";
import users from "./users";
import photos from "./photos";

export default function* rootSaga() {
  yield all([posts(), users(), photos()]);
}

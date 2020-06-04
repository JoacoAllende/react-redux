import { put, takeLatest } from "redux-saga/effects";

function* trySignIn({ payload }) {
  try {
    yield payload.auth.signIn();
    yield put({ type: "SIGN_IN" });
  } catch (error) {}
}

function* trySignOut({ payload }) {
  try {
    yield payload.auth.signOut();
    yield put({ type: "SIGN_OUT" });
  } catch (error) {}
}

export default function* auth() {
  yield takeLatest("TRY_SIGN_IN", trySignIn);
  yield takeLatest("TRY_SIGN_OUT", trySignOut);
}

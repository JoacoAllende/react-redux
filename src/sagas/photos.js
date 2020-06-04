import { put, takeLatest, call } from "redux-saga/effects";
import goRest from "../apis/goRest";

function* getPhotos() {
  return yield goRest.get("/photos").then((response) => response.data.result);
}

function* getPhotosSaga() {
  try {
    const photos = yield call(getPhotos);
    yield put({ type: "FETCH_PHOTOS", payload: { photos } });
  } catch (error) {
    yield put({ type: "FETCH_PHOTOS", payload: { photos: [] } });
  }
}

export default function* photos() {
  yield takeLatest("GET_PHOTOS", getPhotosSaga);
}

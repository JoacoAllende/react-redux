import { put, takeLatest, call } from "redux-saga/effects";
import goRest from "../apis/goRest";

function* getPhotos() {
  return yield goRest.get("/photos").then((response) => response.data.result);
}

function* getPhotosSaga() {
  try {
    const photos = yield call(getPhotos);
    console.log(photos);
    yield put({ type: "FETCH_PHOTOS", payload: { photos } });
  } catch (error) {}
}

export default function* photos() {
  yield takeLatest("GET_PHOTOS", getPhotosSaga);
}

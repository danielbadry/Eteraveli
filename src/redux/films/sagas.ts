import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchFilmsFailure, fetchFilmsSuccess } from "./actions";
import { FETCH_FILMS_REQUEST } from "./actionTypes";
import { FilmListInterface, FilmAxiosResponse } from "./types";

const getFilms = () =>
  axios.get<FilmAxiosResponse>("https://swapi.dev/api/films/?format=json");

/*
  Worker Saga: Fired on FETCH_FILMS_REQUEST action
*/
function* fetchFilmsSaga() {
  try {
    const response: AxiosResponse<FilmAxiosResponse> = yield call(getFilms);
    yield put(
      fetchFilmsSuccess({
        films: response.data.results,
      })
    );
  } catch (e: any) {
    yield put(
      fetchFilmsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_FILMS_REQUEST` action.
  Allows concurrent increments.
*/
function* filmsSaga() {
  yield all([takeLatest(FETCH_FILMS_REQUEST, fetchFilmsSaga)]);
}

export default filmsSaga;

import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchFilmsFailure, fetchFilmsSuccess } from "./actions";
import { FETCH_FILMS_REQUEST, SET_SEARCH_VALUE } from "./actionTypes";
import { FilmAxiosResponse, FilmListInterface } from "./types";

const getFilms = () =>
  axios.get<FilmAxiosResponse>("https://swapi.dev/api/films/?format=json");

/*
  Worker Saga: Fired on FETCH_FILMS_REQUEST action
*/
let allMovies: FilmListInterface[] = [];
function* fetchFilmsSaga() {
  try {
    const response: AxiosResponse<FilmAxiosResponse> = yield call(getFilms);
    allMovies = response.data.results;
    yield put(
      fetchFilmsSuccess({
        films: allMovies,
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

function* filterFilmBySearchValue({ payload }: any) {
  //TODO: check lower case and search in all items
  yield put(
    fetchFilmsSuccess({
      films: allMovies.filter((item) => {
        return item.title.includes(payload.searchValue);
      }),
    })
  );
}

/*
  Starts worker saga on latest dispatched `FETCH_FILMS_REQUEST` action.
  Allows concurrent increments.
*/
function* filmsSaga() {
  yield all([
    takeLatest(FETCH_FILMS_REQUEST, fetchFilmsSaga),
    takeLatest(SET_SEARCH_VALUE, filterFilmBySearchValue),
  ]);
}

export default filmsSaga;

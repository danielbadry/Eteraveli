import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

import { fetchFilmsFailure, fetchFilmsSuccess } from "./actions";
import {
  FETCH_FILMS_REQUEST,
  SET_SEARCH_VALUE,
  SET_SORT_VALUE,
} from "./actionTypes";
import { getFilmsSelector } from "./selectors";
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

function* sortFilmBySortValue({ payload }: any) {
  let filmList: FilmListInterface[] = yield select(getFilmsSelector);
  filmList = JSON.parse(JSON.stringify(filmList));
  filmList = filmList.sort((a: any, b: any) =>
    a[payload.sortValue] > b[payload.sortValue] ? 1 : -1
  );

  yield put(
    fetchFilmsSuccess({
      films: filmList,
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
    takeLatest(SET_SORT_VALUE, sortFilmBySortValue),
  ]);
}

export default filmsSaga;

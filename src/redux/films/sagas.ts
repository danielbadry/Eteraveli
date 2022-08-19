import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

import { fetchFilmsFailure, fetchFilmsSuccess } from "./actions";
import {
  FETCH_FILMS_REQUEST,
  SET_SEARCH_VALUE,
  SET_SORT_VALUE,
} from "./actionTypes";
import { getFilmsSelector, getSortValueSelector } from "./selectors";
import {
  FilmAxiosResponse,
  FilmListInterface,
  SearchValue,
  SortValue,
} from "./types";

const getFilms = () =>
  axios.get<FilmAxiosResponse>("https://swapi.dev/api/films/?format=json");

const sortFilmList = (filmList: FilmListInterface[], sortValue: string) => {
  return JSON.parse(JSON.stringify(filmList)).sort((a: any, b: any) =>
    a[sortValue] > b[sortValue] ? 1 : -1
  );
};

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

function* filterFilmBySearchValue({ payload }: SearchValue) {
  let sortValue: string = yield select(getSortValueSelector);

  //TODO: is it needed to search in all items?
  let filmList: FilmListInterface[] = allMovies.filter((item) => {
    return item.title.toLowerCase().includes(payload.searchValue.toLowerCase());
  });
  filmList = sortFilmList(filmList, sortValue);

  yield put(
    fetchFilmsSuccess({
      films: filmList,
    })
  );
}

function* sortFilmBySortValue({ payload }: SortValue) {
  let filmList: FilmListInterface[] = yield select(getFilmsSelector);

  //TODO: is it needed to sort by date separately?
  filmList = sortFilmList(filmList, payload.sortValue);

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

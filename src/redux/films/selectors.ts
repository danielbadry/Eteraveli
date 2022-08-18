import { createSelector } from "reselect";

import { AppState } from "../store/rootReducer";

const getPending = (state: AppState) => state.film.pending;

const getFilms = (state: AppState) => state.film.films;

const getError = (state: AppState) => state.film.error;

export const getFilmsSelector = createSelector(getFilms, (films: any) => films);

export const getPendingSelector = createSelector(
  getPending,
  (pending: boolean) => pending
);

export const getErrorSelector = createSelector(getError, (error: any) => error);

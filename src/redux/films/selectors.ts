import { createSelector } from "reselect";

import { AppState } from "../store/rootReducer";
import { FilmListInterface } from "./types";

const getPending = (state: AppState) => state.film.pending;

const getFilms = (state: AppState) => state.film.films;

const getError = (state: AppState) => state.film.error;

const getSelectedEpisode = (state: AppState) => state.film.selectedEpisode;

export const getSelectedEpisodeSelector = createSelector(
  getSelectedEpisode,
  (episode: FilmListInterface) => episode
);

export const getFilmsSelector = createSelector(
  getFilms,
  (films: FilmListInterface[]) => films
);

export const getPendingSelector = createSelector(
  getPending,
  (pending: boolean) => pending
);

export const getErrorSelector = createSelector(getError, (error: any) => error);

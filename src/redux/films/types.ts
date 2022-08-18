import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  SELECT_EPISODE,
} from "./actionTypes";

export interface FilmAxiosResponse {
  count: number;
  results: FilmListInterface[];
}
export interface FilmListInterface {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  url: string;
}

export interface FilmsState {
  pending: boolean;
  films: FilmListInterface[];
  error: string | null;
  selectedEpisode: string | null;
}

export interface FetchFilmsSuccessPayload {
  films: FilmListInterface[];
}

export interface FetchFilmsFailurePayload {
  error: string;
}

export interface FetchFilmsRequest {
  type: typeof FETCH_FILMS_REQUEST;
}

export type FetchFilmsSuccess = {
  type: typeof FETCH_FILMS_SUCCESS;
  payload: FetchFilmsSuccessPayload;
};

export type FetchFilmsFailure = {
  type: typeof FETCH_FILMS_FAILURE;
  payload: FetchFilmsFailurePayload;
};

export interface SelectedEpisodePayload {
  selectedEpisode: any;
}
export type SelectedEpisode = {
  type: typeof SELECT_EPISODE;
  payload: SelectedEpisodePayload;
};

export type FilmsActions =
  | FetchFilmsRequest
  | FetchFilmsSuccess
  | FetchFilmsFailure
  | SelectedEpisode;

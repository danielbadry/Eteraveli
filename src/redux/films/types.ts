import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  SELECT_EPISODE,
  SET_SORT_VALUE,
  SET_SEARCH_VALUE,
} from "./actionTypes";

export interface FilmAxiosResponseInterface {
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

export interface FilmsStateInterface {
  pending: boolean;
  films: FilmListInterface[];
  error: string | null;
  selectedEpisode: string | null;
  sortValue: string | null;
}

export interface FetchFilmsSuccessPayloadInterface {
  films: FilmListInterface[];
}

export interface FetchFilmsFailurePayloadInterface {
  error: string;
}

export interface FetchFilmsRequestInterface {
  type: typeof FETCH_FILMS_REQUEST;
}

export type FetchFilmsSuccessType = {
  type: typeof FETCH_FILMS_SUCCESS;
  payload: FetchFilmsSuccessPayloadInterface;
};

export type FetchFilmsFailureType = {
  type: typeof FETCH_FILMS_FAILURE;
  payload: FetchFilmsFailurePayloadInterface;
};

export interface SelectedEpisodePayloadInterface {
  selectedEpisode: any;
}
export type SelectedEpisodeType = {
  type: typeof SELECT_EPISODE;
  payload: SelectedEpisodePayloadInterface;
};

export interface SetSearchValuePayloadInterface {
  searchValue: any;
}
export type SearchValueType = {
  type: typeof SET_SEARCH_VALUE;
  payload: SetSearchValuePayloadInterface;
};

export interface SetSortValuePayloadInterface {
  sortValue: any;
}
export type SortValueType = {
  type: typeof SET_SORT_VALUE;
  payload: SetSortValuePayloadInterface;
};

export type FilmsActions =
  | FetchFilmsRequestInterface
  | FetchFilmsSuccessType
  | FetchFilmsFailureType
  | SortValueType
  | SelectedEpisodeType;

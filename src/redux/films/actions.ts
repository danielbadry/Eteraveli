import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_SUCCESS,
  SELECT_EPISODE,
  SET_SEARCH_VALUE,
  SET_SORT_VALUE,
} from "./actionTypes";
import {
  FetchFilmsRequestInterface,
  FetchFilmsSuccessType,
  FetchFilmsSuccessPayloadInterface,
  FetchFilmsFailureType,
  FetchFilmsFailurePayloadInterface,
  SelectedEpisodePayloadInterface,
  SelectedEpisodeType,
  SetSearchValuePayloadInterface,
  SearchValueType,
  SetSortValuePayloadInterface,
  SortValueType,
} from "./types";

export const fetchFilmsRequest = (): FetchFilmsRequestInterface => ({
  type: FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (
  payload: FetchFilmsSuccessPayloadInterface
): FetchFilmsSuccessType => ({
  type: FETCH_FILMS_SUCCESS,
  payload,
});

export const fetchFilmsFailure = (
  payload: FetchFilmsFailurePayloadInterface
): FetchFilmsFailureType => ({
  type: FETCH_FILMS_FAILURE,
  payload,
});

export const selectEpisode = (
  payload: SelectedEpisodePayloadInterface
): SelectedEpisodeType => ({
  type: SELECT_EPISODE,
  payload,
});

export const setSearchValue = (
  payload: SetSearchValuePayloadInterface
): SearchValueType => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const setSortValue = (
  payload: SetSortValuePayloadInterface
): SortValueType => ({
  type: SET_SORT_VALUE,
  payload,
});

import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_SUCCESS,
  SELECT_EPISODE,
} from "./actionTypes";
import {
  FetchFilmsRequest,
  FetchFilmsSuccess,
  FetchFilmsSuccessPayload,
  FetchFilmsFailure,
  FetchFilmsFailurePayload,
  SelectedEpisodePayload,
  SelectedEpisode,
} from "./types";

export const fetchFilmsRequest = (): FetchFilmsRequest => ({
  type: FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (
  payload: FetchFilmsSuccessPayload
): FetchFilmsSuccess => ({
  type: FETCH_FILMS_SUCCESS,
  payload,
});

export const fetchFilmsFailure = (
  payload: FetchFilmsFailurePayload
): FetchFilmsFailure => ({
  type: FETCH_FILMS_FAILURE,
  payload,
});

export const selectEpisode = (
  payload: SelectedEpisodePayload
): SelectedEpisode => ({
  type: SELECT_EPISODE,
  payload,
});

import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  SELECT_EPISODE,
  SET_SORT_VALUE,
  SET_SEARCH_VALUE,
} from "./actionTypes";

import { FilmsActions, FilmsState } from "./types";

const initialState: FilmsState = {
  pending: false,
  films: [],
  error: null,
  selectedEpisode: null,
};

const actions = (state = initialState, action: FilmsActions) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        pending: true,
        selectedEpisode: null,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        pending: false,
        films: action.payload.films,
        error: null,
        selectedEpisode: null,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        pending: false,
        films: [],
        error: action.payload.error,
        selectedEpisode: null,
      };
    case SELECT_EPISODE:
      return {
        ...state,
        selectedEpisode: action.payload.selectedEpisode,
      };
    default:
      return {
        ...state,
      };
  }
};
export default actions;

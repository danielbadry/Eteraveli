import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
} from "./actionTypes";

import { FilmsActions, FilmsState } from "./types";

const initialState: FilmsState = {
  pending: false,
  films: [],
  error: null,
};

const actions = (state = initialState, action: FilmsActions) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        pending: false,
        films: action.payload.films,
        error: null,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        pending: false,
        films: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
export default actions;

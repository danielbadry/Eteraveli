import { combineReducers } from "redux";

import filmReducer from "../films/reducer";

const rootReducer = combineReducers({
  film: filmReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

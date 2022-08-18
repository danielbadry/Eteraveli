import { FC, useState, useEffect } from "react";
import FilmListView from "./film-list.view";

import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getFilmsSelector,
  getErrorSelector,
} from "../redux/films/selectors";
import { fetchFilmsRequest } from "../redux/films/actions";

const FilmListController: FC = () => {
  return <FilmListView isLoading={false} />;
};

export default FilmListController;

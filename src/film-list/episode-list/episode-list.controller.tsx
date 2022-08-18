import { FC, useEffect } from "react";
import EpisodeListView from "./episode-list.view";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getFilmsSelector,
  getErrorSelector,
} from "../../redux/films/selectors";
import { fetchFilmsRequest } from "../../redux/films/actions";
import { FilmListInterface } from "../../redux/films/types";

const EpisodeListController: FC = (props) => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const filmList: FilmListInterface[] = useSelector(getFilmsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchFilmsRequest());
  }, []);

  return <EpisodeListView isLoading={pending} filmList={filmList} />;
};

export default EpisodeListController;

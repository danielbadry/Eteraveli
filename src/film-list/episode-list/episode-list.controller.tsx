import { FC, useEffect } from "react";
import EpisodeListView from "./episode-list.view";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getFilmsSelector,
  getErrorSelector,
} from "../../redux/films/selectors";
import { fetchFilmsRequest } from "../../redux/films/actions";

const EpisodeListController: FC = (props) => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const filmList: any = useSelector(getFilmsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchFilmsRequest());
  }, []);

  return <EpisodeListView filmList={filmList} />;
};

export default EpisodeListController;

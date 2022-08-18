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
import { selectEpisode } from "../../redux/films/actions";

const EpisodeListController: FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const filmList: FilmListInterface[] = useSelector(getFilmsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchFilmsRequest());
  }, []);

  const handleSelectEpisode = (filmItem: FilmListInterface) => (event: any) => {
    dispatch(selectEpisode({ selectedEpisode: filmItem }));
  };

  return (
    <EpisodeListView
      isLoading={pending}
      filmList={filmList}
      handleSelectEpisode={handleSelectEpisode}
    />
  );
};

export default EpisodeListController;

import { FC, ReactElement } from "react";
import EpisodeInfoView from "./episode-info.view";
import { useDispatch, useSelector } from "react-redux";
import { FilmListInterface } from "../../../redux/films/types";
import { getSelectedEpisodeSelector } from "../../../redux/films/selectors";

const EpisodeInfoController: FC = () => {
  const selectedEpisode: FilmListInterface = useSelector(
    getSelectedEpisodeSelector
  );

  return <EpisodeInfoView episodeInfo={selectedEpisode} />;
};

export default EpisodeInfoController;

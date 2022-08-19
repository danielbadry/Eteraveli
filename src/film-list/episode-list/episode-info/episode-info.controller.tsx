import { FC } from "react";
import EpisodeInfoView from "./episode-info.view";
import { useSelector } from "react-redux";
import { FilmListInterface } from "../../../redux/films/types";
import { getSelectedEpisodeSelector } from "../../../redux/films/selectors";

const EpisodeInfoController: FC = () => {
  const selectedEpisode: FilmListInterface = useSelector(
    getSelectedEpisodeSelector
  );

  return <EpisodeInfoView episodeInfo={selectedEpisode} />;
};

export default EpisodeInfoController;

import { MouseEventHandler } from "react";
import { FilmListInterface } from "../../redux/films/types";

export interface EpisodeListViewPropsInterface {
  filmList?: FilmListInterface[];
  isLoading: boolean;
  handleSelectEpisode: (filmItem: FilmListInterface) => (event: any) => void;
  error: string;
}

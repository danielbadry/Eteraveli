import { FilmListInterface } from "../../redux/films/types";

export interface EpisodeListViewPropsInterface {
  filmList?: FilmListInterface[];
  isLoading: boolean;
  handleSelectEpisode: any;
}

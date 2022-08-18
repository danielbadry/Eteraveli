import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./episode-list.module.scss";
import { EpisodeListViewPropsInterface } from "./episode-list.type";
import { FilmListInterface } from "../../redux/films/types";
import { selectEpisode } from "../../redux/films/actions";
import { useDispatch } from "react-redux";
import { EpisodeInfo } from "./episode-info";
const EpisodeListView: FC<EpisodeListViewPropsInterface> = (props) => {
  const { filmList, isLoading } = props;
  const dispatch = useDispatch();

  if (isLoading) {
    return <div className={styles.isLoading}>Loading...</div>;
  }
  return (
    <>
      <div className={styles.container}>
        <List>
          {filmList?.map((filmItem: FilmListInterface) => (
            <ListItem
              className={styles.listItemContainer}
              onClick={() =>
                dispatch(selectEpisode({ selectedEpisode: filmItem }))
              }
            >
              <div className={styles.episodeName}>
                Episode {filmItem.episode_id}
              </div>
              <div className={styles.episodeTitle}>{filmItem.title}</div>
              <div className={styles.episodeDate}>{filmItem.release_date}</div>
            </ListItem>
          ))}
        </List>
      </div>

      <EpisodeInfo />
    </>
  );
};

export default EpisodeListView;

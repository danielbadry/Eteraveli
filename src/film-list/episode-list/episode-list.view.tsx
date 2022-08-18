import { FC, ReactElement } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./episode-list.module.scss";
import { EpisodeListViewPropsInterface } from "./episode-list.type";
import { FilmListInterface } from "../../redux/films/types";
const EpisodeListView: FC<EpisodeListViewPropsInterface> = (props) => {
  const { filmList } = props;
  return (
    <div className={styles.container}>
      <List>
        {filmList?.map((filmItem: FilmListInterface) => (
          <ListItem className={styles.listItemContainer}>
            <div className={styles.episodeName}>
              Episode {filmItem.episode_id}
            </div>
            <div className={styles.episodeTitle}>{filmItem.title}</div>
            <div className={styles.episodeDate}>{filmItem.release_date}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EpisodeListView;

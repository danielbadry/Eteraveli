import { FC, ReactElement } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./episode-list.module.scss";
const EpisodeListView: FC = () => {
  return (
    <div className={styles.container}>
      <List>
        <ListItem className={styles.listItemContainer}>
          <div className={styles.episodeName}>Episode 1</div>
          <div className={styles.episodeTitle}>The Empire Strikes Back</div>
          <div className={styles.episodeDate}>1980-05-05</div>
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <div className={styles.episodeName}>Episode 1</div>
          <div className={styles.episodeTitle}>The Empire Strikes Back</div>
          <div className={styles.episodeDate}>1980-05-05</div>
        </ListItem>
        <ListItem className={styles.listItemContainer}>
          <div className={styles.episodeName}>Episode 1</div>
          <div className={styles.episodeTitle}>The Empire Strikes Back</div>
          <div className={styles.episodeDate}>1980-05-05</div>
        </ListItem>
      </List>
    </div>
  );
};

export default EpisodeListView;

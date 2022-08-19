import { FC } from "react";
import { AppBar } from "./app-bar";
import { EpisodeList } from "./episode-list";
import styles from "./film-list.module.scss";
const FilmListView: FC = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <div className={styles.bodyContainer}>
        <EpisodeList />
      </div>
    </div>
  );
};

export default FilmListView;

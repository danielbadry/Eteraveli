import { FC, ReactElement } from "react";
import { AppBar } from "./app-bar";
import { EpisodeInfo } from "./episode-info";
import { EpisodeList } from "./episode-list";
import styles from "./film-list.module.scss";
import { FilmListViewPropsInterface } from "./film-list.type";
const FilmListView: FC<FilmListViewPropsInterface> = (props) => {
  const { isLoading } = props;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <AppBar />
      <div className={styles.bodyContainer}>
        <EpisodeList />
        <EpisodeInfo />
      </div>
    </div>
  );
};

export default FilmListView;

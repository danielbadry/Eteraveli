import { FC, ReactElement } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./episode-info.module.scss";
import { EpisodeInfoViewPropsInterface } from "./episode-info.type";
const EpisodeInfoView: FC<EpisodeInfoViewPropsInterface> = (props) => {
  const { episodeInfo } = props;

  if (!episodeInfo)
    return <div className={styles.noMovie}>No movie selected</div>;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.title}>{episodeInfo.title}</div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: episodeInfo.opening_crawl,
        }}
      ></div>
      <div className={styles.director}>director: {episodeInfo.director}</div>
    </div>
  );
};

export default EpisodeInfoView;

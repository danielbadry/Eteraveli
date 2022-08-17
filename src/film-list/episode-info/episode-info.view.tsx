import { FC, ReactElement } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./episode-info.module.scss";
const EpisodeInfoView: FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.title}>The Empire Strikes Back</div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: `It is a dark time for the\r\nRebellion. Although the Death\r\nStar has
      been destroyed,\r\nImperial troops have driven the\r\nRebel forces from
      their hidden\r\nbase and pursued them across\r\nthe
      galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of
      freedom\r\nfighters led by Luke Skywalker\r\nhas established a new
      secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord
      Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has
      dispatched\r\nthousands of remote probes into\r\nthe far reaches of
      space....`,
        }}
      ></div>
      <div className={styles.director}>director: Irvin Kershner</div>
    </div>
  );
};

export default EpisodeInfoView;

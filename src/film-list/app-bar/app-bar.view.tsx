import { FC } from "react";
import styles from "./app-bar.module.scss";
import { SearchInput } from "./search-input/";
import { SortButton } from "./sort-button/";
const AppBarView: FC = () => {
  return (
    <div className={styles.appBar}>
      <SortButton />
      <SearchInput />
    </div>
  );
};

export default AppBarView;

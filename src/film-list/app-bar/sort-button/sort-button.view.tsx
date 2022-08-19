import { FC } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./sort-button.module.scss";
import { SortButtonViewPropsInterface } from "./sort-button.type";

const SortButtonView: FC<SortButtonViewPropsInterface> = (props) => {
  const {
    handleClick,
    handleClose,
    isOpen,
    anchorEl,
    handleClickSortItem,
    selectedSort,
  } = props;
  return (
    <>
      <Button
        id="sort-button"
        aria-controls={isOpen ? "sort-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
        className={styles.sortButton}
      >
        Sort by ...
      </Button>
      <Menu
        id="sort-menu"
        aria-labelledby="sort-button"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={styles.menuContainer}
      >
        {/* @ts-ignore */}
        <MenuItem
          onClick={handleClickSortItem("episode_id")}
          className={styles.menuItem}
          selected={selectedSort === "episode_id"}
        >
          Episode
        </MenuItem>
        {/* @ts-ignore */}
        <MenuItem
          onClick={handleClickSortItem("release_date")}
          className={styles.menuItem}
          selected={selectedSort === "release_date"}
        >
          Year
        </MenuItem>
      </Menu>
    </>
  );
};

export default SortButtonView;

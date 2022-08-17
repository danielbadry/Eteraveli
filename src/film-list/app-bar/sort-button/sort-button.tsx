import { FC, useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./sort-button.module.scss";

const SortButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="sort-button"
        aria-controls={open ? "sort-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.sortButton}
      >
        Sort by ...
      </Button>
      <Menu
        id="sort-menu"
        aria-labelledby="sort-button"
        anchorEl={anchorEl}
        open={open}
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
        <MenuItem onClick={handleClose} className={styles.menuItem}>
          Episode
        </MenuItem>
        <MenuItem onClick={handleClose} className={styles.menuItem}>
          Year
        </MenuItem>
      </Menu>
    </>
  );
};

export default SortButton;

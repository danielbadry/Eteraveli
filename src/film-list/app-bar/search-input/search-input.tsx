import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import styles from "./search-input.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      className={styles.searchInput}
    >
      <SearchIcon htmlColor="#728190" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type to search"
        inputProps={{ "aria-label": "Type to search" }}
      />
    </Paper>
  );
};
export default SearchInput;

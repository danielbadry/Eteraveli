import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import styles from "./search-input.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputViewPropsInterface } from "./search-input.type";

const SearchInputView: React.FC<SearchInputViewPropsInterface> = (props) => {
  const { handleChangeValue } = props;

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
        onChange={handleChangeValue}
      />
    </Paper>
  );
};
export default SearchInputView;

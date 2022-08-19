import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import styles from "./search-input.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchValue } from "../../../redux/films/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchInputView from "./search-input.view";

const SearchInputController = () => {
  const dispatch = useDispatch();

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setSearchValue({ searchValue: event.target.value }));
  };

  return <SearchInputView handleChangeValue={handleChangeValue} />;
};
export default SearchInputController;

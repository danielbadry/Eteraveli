import * as React from "react";
import { setSearchValue } from "../../../redux/films/actions";
import { useDispatch } from "react-redux";
import SearchInputView from "./search-input.view";
import { debounce } from "@mui/material";

const SearchInputController = () => {
  const dispatch = useDispatch();

  /**
   * @description dispatches the search value to the store
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @returns {void}
   **/
  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setSearchValue({ searchValue: event.target.value }));
  };

  /**
   * @description debounces the search value to the store
   * @returns {void}
   **/
  const debouncedHandleChangeValue = debounce(handleChangeValue, 300);

  return <SearchInputView handleChangeValue={debouncedHandleChangeValue} />;
};
export default SearchInputController;

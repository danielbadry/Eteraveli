import * as React from "react";
import { setSearchValue } from "../../../redux/films/actions";
import { useDispatch } from "react-redux";
import SearchInputView from "./search-input.view";

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

  return <SearchInputView handleChangeValue={handleChangeValue} />;
};
export default SearchInputController;

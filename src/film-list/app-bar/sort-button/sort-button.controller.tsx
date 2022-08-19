import { FC, useState, MouseEvent, MouseEventHandler } from "react";
import SortButtonView from "./sort-button.view";
import { useDispatch } from "react-redux";
import { setSortValue } from "../../../redux/films/actions";

const SortButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSort, setSelectedSort] = useState<null | string>(null);

  const dispatch = useDispatch();
  const isOpen = Boolean(anchorEl);

  /**
   * @param {MouseEvent<HTMLElement>} event
   * @returns {void}
   **/
  const handleOpenSortMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * @description closes the sort menu
   * @returns {void}
   **/
  const handleCloseSortMenu = (): void => {
    setAnchorEl(null);
  };

  /**
   * @description on click of a sort option, dispatches the sort value to the store
   * @param {string} sortName
   * @param {MouseEventHandler<HTMLLIElement> | undefined} event
   * @returns {void}
   */
  /**
   * @description shouldn't use arrow function in JSX
   */
  const handleClickSortItem =
    (sortName: string) => (event: MouseEventHandler<HTMLAnchorElement>) => {
      dispatch(setSortValue({ sortValue: sortName }));
      setSelectedSort(sortName);
      handleCloseSortMenu();
    };

  return (
    <SortButtonView
      handleClick={handleOpenSortMenu}
      handleClose={handleCloseSortMenu}
      handleClickSortItem={handleClickSortItem}
      selectedSort={selectedSort}
      isOpen={isOpen}
      anchorEl={anchorEl}
    />
  );
};

export default SortButton;

import { FC, useState, MouseEvent } from "react";
import SortButtonView from "./sort-button.view";
import { useDispatch, useSelector } from "react-redux";
import { setSortValue } from "../../../redux/films/actions";

const SortButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSort, setSelectedSort] = useState<null | string>(null);

  const dispatch = useDispatch();

  const isOpen = Boolean(anchorEl);

  const handleOpenSortMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorEl(null);
  };

  const handleClickSortItem = (sortName: string) => (event: any) => {
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

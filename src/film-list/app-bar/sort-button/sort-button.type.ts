import { MouseEventHandler, MouseEvent } from "react";

export interface SortButtonViewPropsInterface {
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleClickSortItem: (
    sortName: string
  ) => (event: MouseEventHandler<HTMLAnchorElement>) => void;
  selectedSort: string | null;
}

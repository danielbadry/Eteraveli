import { FC, useState, useEffect } from "react";
import FilmListView from "./film-list.view";

const FilmListController: FC = () => {
  const [filmList, setFilmList] = useState<Record<string, unknown>[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {});
  return <FilmListView isLoading={isLoading} filmList={filmList} />;
};

export default FilmListController;

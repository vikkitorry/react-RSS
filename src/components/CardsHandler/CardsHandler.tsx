import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  createContext,
} from 'react';
import { CardsList } from '../widgets/CardsList/CardsList';
import { ShowSchema } from '../../app/services/types/serviceTypes';
import { SearchBar } from '../SearchBar/SearchBar';
import { Loader, LoaderTheme } from '../widgets/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { getPageData } from '../../app/services/service';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';

type ContextType = {
  shows: ShowSchema[] | null;
  search: string;
};

export const Context = createContext<ContextType>({
  shows: [],
  search: '',
});

export enum CardsHandlerSize {
  FULL = 'full_screen',
  LEFT = 'left_screen',
}

interface ICardsHandlerProps {
  size: CardsHandlerSize;
  onClick: () => void;
}

const CardsHandler = memo((props: ICardsHandlerProps) => {
  const { size, onClick } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || ''
  );
  const [numOfItems, setNumOfItems] = useState<number>(30);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ShowSchema[] | null>(null);
  const pageQuery = searchParams.get(MainPageRoutes.PAGE);
  const page = pageQuery ? +pageQuery : 1;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
  };

  useEffect(() => {
    if (!pageQuery) {
      setSearchParams((searchParams) => {
        searchParams.set(MainPageRoutes.PAGE, '1');
        return searchParams;
      });
    }
  }, [pageQuery, setSearchParams]);

  const getPage = useCallback(() => {
    setIsLoading(true);
    getPageData(page, search, numOfItems)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [page, search, numOfItems]);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <Context.Provider value={{ search, shows: data }}>
      <div className={classNames(cls.Cards, mods, [])} onClick={onClick}>
        <SearchBar
          setSearch={setSearch}
          setSearchParams={setSearchParams}
          setNumOfItems={setNumOfItems}
        />
        {isLoading ? (
          <Loader color={LoaderTheme.BACKGROUND_DARK} />
        ) : (
          <CardsList setSearchParams={setSearchParams} />
        )}

        {!isLoading && data && <Pagination page={page} />}
      </div>
    </Context.Provider>
  );
});

export default CardsHandler;

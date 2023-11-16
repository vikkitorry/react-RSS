import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, { useEffect, useCallback, memo } from 'react';
import { CardsList } from '../widgets/CardsList/CardsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Loader, LoaderTheme } from '../widgets/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { getPageData } from '../../app/services/service';
import { useAppSelector, useAppDispatch } from '../../store/hooks/redux';
import { loadSlice } from '../../store/reducers/LoadSlice';
import { showsSlice } from '../../store/reducers/ShowsSlice';

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

  const { search } = useAppSelector((state) => state.searchReducer);
  const { isListLoad } = useAppSelector((state) => state.loadReducer);
  const { shows, numOfShows } = useAppSelector((state) => state.showsReducer);
  const dispatch = useAppDispatch();
  const { setisListLoad } = loadSlice.actions;
  const { setShows } = showsSlice.actions;

  const [searchParams, setSearchParams] = useSearchParams();
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
    dispatch(setisListLoad(true));
    getPageData(page, search, numOfShows)
      .then((data) => dispatch(setShows(data)))
      .catch(() => dispatch(setShows(null)))
      .finally(() => dispatch(setisListLoad(false)));
  }, [page, search, numOfShows, dispatch, setisListLoad, setShows]);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <div className={classNames(cls.Cards, mods, [])} onClick={onClick}>
      <SearchBar setSearchParams={setSearchParams} />
      {isListLoad ? (
        <Loader color={LoaderTheme.BACKGROUND_DARK} />
      ) : (
        <CardsList setSearchParams={setSearchParams} />
      )}

      {!isListLoad && shows && <Pagination page={page} />}
    </div>
  );
});

export default CardsHandler;

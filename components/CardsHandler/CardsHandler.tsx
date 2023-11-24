import { classNames } from '@/src/utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, { useEffect, memo, useCallback } from 'react';
import { CardsList } from '../CardsList/CardsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Loader, LoaderTheme } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
// import { useSearchParams } from 'react-router-dom';
// import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { service } from '@/src/services/service';
import { useAppSelector } from '@/src/store/hooks/redux';
import { ShowSchema } from '@/src/services/types/serviceTypes';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { getServerSideProps } from '@/src/pages';

export enum CardsHandlerSize {
  FULL = 'full_screen',
  LEFT = 'left_screen',
}

interface ICardsHandlerProps {
  size: CardsHandlerSize;
  onClick: () => void;
  dataCards: ShowSchema[];
}

const CardsHandler = memo((props: ICardsHandlerProps) => {
  const { size, onClick, dataCards } = props;

  const { search } = useAppSelector((state) => state.searchReducer);
  const { isListLoad } = useAppSelector((state) => state.loadReducer);
  const { numOfShows } = useAppSelector((state) => state.showsReducer);
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname = usePathname()
  const pageQuery = searchParams.get('page');
  const page = pageQuery ? +pageQuery : 1;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    if (!pageQuery) {
      router.push(pathname + '?' + createQueryString('page', `${page}`))
    }
  }, [pageQuery]);

  const { data } = service.useGetPageDataQuery({
    page,
    query: search,
    pageSize: numOfShows,
  });

  return (
    <div className={classNames(cls.Cards, mods, [])} onClick={onClick}>
      <SearchBar />
      <CardsList shows={dataCards} />
      <Pagination page={page} createQueryString={createQueryString} />
      {/* {isListLoad ? (
        <Loader color={LoaderTheme.BACKGROUND_DARK} />
      ) : (
        <CardsList shows={data?.result} />
      )}
      {!isListLoad && data?.result.length && <Pagination page={page} createQueryString={createQueryString}/>} */}
    </div>
  );
});

export default CardsHandler;

import { Inter } from 'next/font/google'
import cls from '@/src/styles/Home.module.css';
import CardsHandler from '../../components/CardsHandler/CardsHandler';
import { useState, useEffect, useCallback } from 'react';
import { CardsHandlerSize } from '../../components/CardsHandler/CardsHandler';
import { viewSlice } from '../store/reducers/ViewSlice';
import { useAppDispatch } from '../store/hooks/redux';
import { useSearchParams } from 'next/navigation'
import { fetchAllShowsData } from '../services/getShows';
import { fetchShowData } from '../services/getShow';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { DetailedShowSchema, ShowSchema } from '../services/types/serviceTypes';
import { DetailedCard } from '@/components/Card/Detailed/Detailed';

const inter = Inter({ subsets: ['latin'] })

type MainPageProps = {
  data: {
    allShowsData: ShowSchema[];
    showData: DetailedShowSchema | null;
  };
}

export const getServerSideProps: GetServerSideProps<MainPageProps> = async (context) => {
  // Получаем данные из строки запроса
  const { page, showId } = context.query

  const showData: DetailedShowSchema | null = showId ? await fetchShowData(Number(showId)) : null
  const allShowsData: ShowSchema[] = await fetchAllShowsData({page: Number(page), query: '', pageSize: 30})

  // Передаем данные на страницу через объект props
  return { props: { data: {
    allShowsData,
    showData,
  }}}
}

const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {allShowsData, showData} = data
  // const [searchParams, setSearchParams] = useSearchParams();
  //использую для закрытия страницы
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(false);
  const searchParams = useSearchParams()
  const isShowOpen = searchParams.get('search')
  // const isShowOpen = searchParams.get(MainPageRoutes.SHOW);
  const dispatch = useAppDispatch();
  const { setShowId } = viewSlice.actions;

  // useEffect(() => {
  //   setIsDetailedOpen(Boolean(isShowOpen));
  //   Boolean(isShowOpen) && dispatch(setShowId(isShowOpen ? +isShowOpen : null));
  // }, [isShowOpen, dispatch, setShowId]);

  // const closeDetailed = useCallback(() => {
  //   if (isDetailedOpen) {
  //     searchParams.delete(MainPageRoutes.SHOW);
  //     setSearchParams(searchParams);
  //   }
  // }, [isDetailedOpen, setSearchParams, searchParams]);

  const closeDetailed = () => {
    console.log('click')
  }

  return (
    <div className={cls.MainPage} data-testid={'mainPage'}>
      <CardsHandler
        onClick={closeDetailed}
        data-testid={'cardsHandler'}
        size={showData ? CardsHandlerSize.LEFT : CardsHandlerSize.FULL}
      />
      {showData && <DetailedCard data={showData} />}
    </div>
  );
}

export default Home;

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
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export const enum MainPageRoutes {
  show = 'show',
  page = 'page'
}

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
  const router = useRouter()
  const isShowOpen = searchParams.get(MainPageRoutes.show);
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
    if (showData) {
      console.log('click')
    }
  }

  return (
    <div className={cls.MainPage} data-testid={'mainPage'}>
      <CardsHandler
        dataCards={allShowsData}
        onClick={closeDetailed}
        data-testid={'cardsHandler'}
        size={isShowOpen ? CardsHandlerSize.LEFT : CardsHandlerSize.FULL}
      />
      {isShowOpen && <DetailedCard />}
    </div>
  );
}

export default Home;

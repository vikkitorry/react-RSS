import { Inter } from 'next/font/google'
import cls from '@/src/styles/Home.module.css';
import CardsHandler from '../../components/CardsHandler/CardsHandler';
import { useState, useEffect, useCallback } from 'react';
import { CardsHandlerSize } from '../../components/CardsHandler/CardsHandler';
import { viewSlice } from '../store/reducers/ViewSlice';
import { useAppDispatch } from '../store/hooks/redux';

const inter = Inter({ subsets: ['latin'] })

 const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(false);
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
        size={isDetailedOpen ? CardsHandlerSize.LEFT : CardsHandlerSize.FULL}
      />
    </div>
  );
}

export default Home;

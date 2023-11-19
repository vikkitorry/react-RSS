import cls from './mainPage.module.scss';
import CardsHandler from '../../components/CardsHandler/CardsHandler';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { CardsHandlerSize } from '../../components/CardsHandler/CardsHandler';
import { Outlet } from 'react-router-dom';
import { viewSlice } from '../../store/reducers/ViewSlice';
import { useAppDispatch } from '../../store/hooks/redux';

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(false);
  const isShowOpen = searchParams.get(MainPageRoutes.SHOW);
  const dispatch = useAppDispatch();
  const { setShowId } = viewSlice.actions;

  useEffect(() => {
    setIsDetailedOpen(Boolean(isShowOpen));
    Boolean(isShowOpen) && dispatch(setShowId(isShowOpen ? +isShowOpen : null));
  }, [isShowOpen, dispatch, setShowId]);

  const closeDetailed = useCallback(() => {
    if (isDetailedOpen) {
      searchParams.delete(MainPageRoutes.SHOW);
      setSearchParams(searchParams);
    }
  }, [isDetailedOpen, setSearchParams, searchParams]);

  return (
    <div className={cls.MainPage} data-testid={'mainPage'}>
      <CardsHandler
        onClick={closeDetailed}
        data-testid={'cardsHandler'}
        size={isDetailedOpen ? CardsHandlerSize.LEFT : CardsHandlerSize.FULL}
      />
      {isDetailedOpen && <Outlet />}
    </div>
  );
};

export default MainPage;

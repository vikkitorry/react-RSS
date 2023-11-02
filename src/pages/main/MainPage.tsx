import cls from './mainPage.module.scss';
import CardsHandler from '../../components/Cards/CardsHandler';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';
import { CardsHandlerSize } from '../../components/Cards/CardsHandler';

export const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(true);
  const isShowOpen = searchParams.get(MainPageRoutes.SHOW);

  useEffect(() => {
    setIsDetailedOpen(!!isShowOpen);
  }, [isShowOpen]);

  return (
    <div className={cls.MainPage}>
      <CardsHandler
        size={isShowOpen ? CardsHandlerSize.LEFT_SCREEN : CardsHandlerSize.FULL}
      />
    </div>
  );
};

export default MainPage;

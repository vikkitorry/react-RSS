import cls from './mainPage.module.scss';
import CardsHandler from '../../components/Cards/CardsHandler';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';
import { CardsHandlerSize } from '../../components/Cards/CardsHandler';
import { DetailedCard } from '../../components/Card/detailedCard/detailedCard';

export const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(true);
  const isShowOpen = searchParams.get(MainPageRoutes.SHOW);

  useEffect(() => {
    setIsDetailedOpen(!!isShowOpen);
  }, [isShowOpen]);

  return (
    <div className={cls.MainPage}>
      <CardsHandler
        size={
          isDetailedOpen ? CardsHandlerSize.LEFT_SCREEN : CardsHandlerSize.FULL
        }
      />
      {isDetailedOpen ? <DetailedCard id={5} /> : 0}
    </div>
  );
};

export default MainPage;

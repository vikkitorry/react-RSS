import cls from './mainPage.module.scss';
import Cards from '../../components/Cards/cards';
// import { useState } from 'react';

export const MainPage = () => {
  // const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(true);
  return (
    <div className={cls.MainPage}>
      <Cards />
    </div>
  );
};

export default MainPage;

import cls from './mainPage.module.scss';
import Results from '../results/Results';
// import { useState } from 'react';

export const MainPage = () => {
  // const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(true);
  return (
    <div className={cls.MainPage}>
      <Results />
    </div>
  );
};

export default MainPage;

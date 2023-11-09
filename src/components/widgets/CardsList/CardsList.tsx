import { Card } from '../../Card/Card';
import cls from './CardsList.module.scss';
import { memo, useContext } from 'react';
import { NoResultsPage } from '../../../pages/noResults/NoResultsPage';
import { Context } from '../../Cards/CardsHandler';

export const CardsList = memo(() => {
  const { shows } = useContext(Context);
  return (
    <>
      {shows ? (
        <div className={cls.gridContainer}>
          <div className={cls.grid}>
            {shows.map((el) => (
              <Card key={el.id} cardData={el} />
            ))}
          </div>
        </div>
      ) : (
        <NoResultsPage />
      )}
    </>
  );
});

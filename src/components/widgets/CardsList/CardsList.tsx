import { Card } from '../../Card/Card';
import cls from './CardsList.module.scss';
import { memo } from 'react';
import { NoResultsPage } from '../../../pages/noResults/NoResultsPage';
import { SetURLSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/redux';

interface ICardsList {
  setSearchParams: SetURLSearchParams;
}

export const CardsList = memo((props: ICardsList) => {
  const { setSearchParams } = props;
  const { shows } = useAppSelector((state) => state.showsReducer);

  return (
    <>
      {shows ? (
        <div className={cls.gridContainer}>
          <div className={cls.grid} data-testid={'grid'}>
            {shows.map((el) => (
              <Card
                key={el.id}
                cardData={el}
                setSearchParams={setSearchParams}
              />
            ))}
          </div>
        </div>
      ) : (
        <NoResultsPage />
      )}
    </>
  );
});

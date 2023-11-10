import { Card } from '../../Card/Card';
import cls from './CardsList.module.scss';
import { memo, useContext } from 'react';
import { NoResultsPage } from '../../../pages/noResults/NoResultsPage';
import { Context } from '../../CardsHandler/CardsHandler';
import { SetURLSearchParams } from 'react-router-dom';

interface ICardsList {
  setSearchParams: SetURLSearchParams;
}

export const CardsList = memo((props: ICardsList) => {
  const { setSearchParams } = props;
  const { shows } = useContext(Context);
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

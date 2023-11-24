import { Card } from '../Card/Card'
import cls from './CardsList.module.scss';
import { memo } from 'react';
// import { SetURLSearchParams } from 'react-router-dom';
import { ShowSchema } from '@/src/services/types/serviceTypes';

interface ICardsList {
  // setSearchParams: SetURLSearchParams;
  shows: ShowSchema[] | undefined;
}

export const CardsList = memo((props: ICardsList) => {
  const { shows } = props;

  return (
    <>
      {shows?.length ? (
        <div className={cls.gridContainer}>
          <div className={cls.grid} data-testid={'grid'}>
            {shows?.map((el) => (
              <Card
                key={el.id}
                cardData={el}
                // setSearchParams={setSearchParams}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
});

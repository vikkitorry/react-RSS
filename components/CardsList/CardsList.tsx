import { Card } from '../Card/Card';
import cls from './CardsList.module.scss';
import { memo } from 'react';
import { ShowSchema } from '@/src/services/types/serviceTypes';

interface ICardsList {
  shows: ShowSchema[] | undefined;
}

export const CardsList = memo((props: ICardsList) => {
  const { shows } = props;

  return (
    <>
      {shows?.length ? (
        <div className={cls.gridContainer}>
          <div className={cls.grid} data-testid={'grid'}>
            {shows?.map((el) => <Card key={el.id} cardData={el} />)}
          </div>
        </div>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
});

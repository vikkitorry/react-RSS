import { Card } from '../../Card/Card';
import { CharacterSchema } from '../../../app/providers/services/types/serviceTypes';
import cls from './GridTable.module.scss';
import { memo } from 'react';

interface IGridTable {
  elements: CharacterSchema[];
  // isLoading: boolean;
}

export const GridTable = memo((props: IGridTable) => {
  const { elements } = props;
  // console.log('render grid table');

  return (
    <div className={cls.gridContainer}>
      <div className={cls.grid}>
        {elements.map((el) => (
          <Card key={el.id} cardData={el} />
        ))}
      </div>
    </div>
  );
});

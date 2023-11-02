import { Card } from '../../Card/Card';
import { ShowSchema } from '../../../app/providers/services/types/serviceTypes';
import cls from './GridTable.module.scss';
import { memo } from 'react';

interface IGridTableProps {
  elements: ShowSchema[];
  // isLoading: boolean;
}

export const GridTable = memo((props: IGridTableProps) => {
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

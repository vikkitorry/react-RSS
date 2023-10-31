import { Card } from '../../Card/Card';
import { CharacterSchema } from '../../../app/providers/services/types/serviceTypes';
import cls from './GridTable.module.scss';
import { Pagination } from '../../Pagination/Pagination';

interface IGridTable {
  elements: CharacterSchema[];
  pages: number;
  // isLoading: boolean;
}

export const GridTable = (props: IGridTable) => {
  const { elements, pages } = props;
  // console.log('render grid table');

  return (
    <div className={cls.gridContainer}>
      <Pagination totalPages={pages} />
      <div className={cls.grid}>
        {elements.map((el) => (
          <Card key={el.id} cardData={el} />
        ))}
      </div>
    </div>
  );
};

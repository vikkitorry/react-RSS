import { classNames } from '../../../utils/libs/classNames/classNames';
import { Card } from '../../Card/Card';
import { CharacterSchema } from '../../../app/providers/services/types/serviceTypes';
import cls from './GridTable.module.scss';
//import { CardSkeleton } from '../../Card/Skeleton/CardSkeleton';

interface IGridTable {
  elements: CharacterSchema[];
  // isLoading: boolean;
}

export const GridTable = (props: IGridTable) => {
  const { elements } = props;

  return (
    <div className={classNames(cls.grid, {}, [])}>
      {/* {this.props.isLoading
          ? Array(20).map((_, i) => <CardSkeleton key={i} />)
          : this.props.elements.map((el) => <Card key={el.id} cardData={el} />)} */}

      {/* {this.props.isLoading
          ? this.props.elements.map((el) => <Card key={el.id} cardData={el} />)
          : Array(20).fill(0).map((_, i) => <CardSkeleton key={i} />)} */}

      {elements.map((el) => (
        <Card key={el.id} cardData={el} />
      ))}
    </div>
  );
};

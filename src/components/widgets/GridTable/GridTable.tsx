import { classNames } from '../../../utils/libs/classNames/classNames';
import { Component } from 'react';
import { Card } from '../../Card/Card';
import { CharacterSchema } from '../../../app/providers/services/types/serviceTypes';
import cls from './GridTable.module.scss';

interface IGridTable {
  elements: CharacterSchema[];
}

export class GridTable extends Component<IGridTable> {
  constructor(props: IGridTable) {
    super(props);
  }
  render() {
    return (
      <div className={classNames(cls.grid, {}, [])}>
        {this.props.elements.map((el) => (
          <Card key={el.id} cardData={el} />
        ))}
      </div>
    );
  }
}

import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
// import { Card } from '../../components/Card/Card';
// import {
//   AllCharacterSchema,
//   CharacterSchema,
// } from '../../app/providers/services/types/serviceTypes';
import { Component } from 'react';
import Service from '../../app/providers/services/service';

export class MainPage extends Component {
  getCards = async () => {
    const cards = await Service.getAllCharacter();
    console.log(cards);
  };

  componentDidMount(): void {
    this.getCards();
  }

  render() {
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        Main page
        <div className={classNames(cls.grid, {}, [])}>
          {/* {this.allCards.map((card: CharacterSchema) => (
            <Card />
          ))} */}
        </div>
      </div>
    );
  }
}

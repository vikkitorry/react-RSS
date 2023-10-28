import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import { Component } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { AboutPage } from '../about/AboutPage';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';

interface IMainPage {
  cards: CharacterSchema[] | null;
}

export class MainPage extends Component<object, IMainPage> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  //добавить функцию для считывания инпута и отправки запроса
  //  продумать поднятия значения инпута выше
  // добавить проверку на дефолт значение в локале,
  // исправить баг с ошибкой и текстом
  onSubmit() {
    console.log('submit');
  }

  componentDidMount(): void {
    Service.getAllCharacters()
      .then((cards) =>
        cards ? this.setState({ cards }) : this.setState({ cards: null })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.cards ? (
          <GridTable elements={this.state.cards} />
        ) : (
          <AboutPage />
        )}
      </div>
    );
  }
}

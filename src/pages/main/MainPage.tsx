import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import { Component } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { NoResultsPage } from '../noResults/NoResultsPage';

interface IMainPage {
  cards: CharacterSchema[] | null;
  inputValue: string | undefined;
}

export class MainPage extends Component<object, IMainPage> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      inputValue: localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  // не сделан лаодер, саспенс фалбак
  // поменять структуру, убрать роутер(он функционаленб убрать навбар)
  // надо проверять есть ли в локале если нет, то вызывать разные методы в сервисе
  onSubmit() {
    Service.getCharacter(this.state.inputValue)
      .then((cards) => (cards ? this.setState({ cards }) : 0))
      .catch(() => this.setState({ cards: null }));
  }

  onBlur(value: string) {
    this.setState({ inputValue: value });
  }

  componentDidMount(): void {
    this.state.inputValue
      ? this.onSubmit()
      : Service.getAllCharacters(this.state.inputValue)
          .then((cards) =>
            cards ? this.setState({ cards }) : this.setState({ cards: null })
          )
          .catch(() => this.setState({ cards: null }));
  }

  render() {
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        <SearchBar
          onSubmit={this.onSubmit}
          onBlur={this.onBlur}
          inputValue={this.state.inputValue}
        />
        {this.state.cards ? (
          <GridTable elements={this.state.cards} />
        ) : (
          <NoResultsPage />
        )}
      </div>
    );
  }
}

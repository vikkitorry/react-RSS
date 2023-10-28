import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import { Component } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCAL_STORAGE } from '../../utils/constants/Constants';
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
      inputValue: localStorage.getItem(SEARCH_LOCAL_STORAGE) || undefined,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  // исправить баг с ошибкой и текстом
  onSubmit() {
    Service.getCharacter(this.state.inputValue)
      .then((cards) =>
        cards ? this.setState({ cards }) : this.setState({ cards: null })
      )
      .catch((err) => console.log(err));
  }

  onBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    this.setState({ inputValue: e.target.value });
  }

  componentDidMount(): void {
    Service.getAllCharacters(this.state.inputValue)
      .then((cards) =>
        cards ? this.setState({ cards }) : this.setState({ cards: null })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        <SearchBar onSubmit={this.onSubmit} onBlur={this.onBlur} />
        {this.state.cards ? (
          <GridTable elements={this.state.cards} />
        ) : (
          <NoResultsPage />
        )}
      </div>
    );
  }
}

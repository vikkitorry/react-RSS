import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import { Component } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { NoResultsPage } from '../noResults/NoResultsPage';
import { Loader } from '../../components/widgets/Loader/Loader';

interface IMainPage {
  cards: CharacterSchema[] | null;
  inputValue: string | undefined;
  isLoading: boolean;
}

export class MainPage extends Component<object, IMainPage> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      inputValue: localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined,
      isLoading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  async onSubmit() {
    this.setState({ isLoading: true });
    await Service.getCharacter(this.state.inputValue)
      .then((cards) => (cards ? this.setState({ cards, isLoading: false }) : 0))
      .catch(() => this.setState({ cards: null, isLoading: false }));
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
    const { cards, inputValue, isLoading } = this.state;
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        <SearchBar
          onSubmit={this.onSubmit}
          onBlur={this.onBlur}
          inputValue={inputValue}
        />
        {isLoading ? (
          <Loader />
        ) : cards ? (
          <GridTable elements={cards} />
        ) : (
          <NoResultsPage />
        )}
      </div>
    );
  }
}

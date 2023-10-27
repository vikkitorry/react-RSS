import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import { Component } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { AboutPage } from '../about/AboutPage';

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

  componentDidMount(): void {
    Service.getAllCharacter()
      .then((cards) =>
        cards ? this.setState({ cards }) : this.setState({ cards: null })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classNames(cls.MainPage, {}, [])}>
        Main page
        {this.state.cards ? (
          <GridTable elements={this.state.cards} />
        ) : (
          <AboutPage />
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../../Button/Button';
import cls from './SearchBar.module.scss';

interface ISearchBar {
  onSubmit: () => void;
}

export class SearchBar extends Component<ISearchBar> {
  constructor(props: ISearchBar) {
    super(props);
  }

  render() {
    return (
      <div className={cls.SearchBar}>
        <input type="text" placeholder="Enter name" />
        <Button
          onClick={this.props.onSubmit.bind(this)}
          className={'j'}
          size={ButtonSize.M}
          theme={ButtonTheme.BACKGROUND_DARK}
        >
          Search
        </Button>
      </div>
    );
  }
}

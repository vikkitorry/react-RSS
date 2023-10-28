import React, { Component } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../../Button/Button';
import cls from './SearchBar.module.scss';

interface ISearchBar {
  onSubmit: () => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export class SearchBar extends Component<ISearchBar> {
  constructor(props: ISearchBar) {
    super(props);
  }

  render() {
    const { onSubmit, onBlur } = this.props;
    return (
      <div className={cls.SearchBar}>
        <input
          type="text"
          placeholder="Enter name"
          onBlur={onBlur.bind(this)}
        />
        <Button
          onClick={onSubmit.bind(this)}
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

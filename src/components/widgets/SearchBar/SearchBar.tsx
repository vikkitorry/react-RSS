import React, { Component } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../../input/Input';

interface ISearchBar {
  inputValue: undefined | string;
  onSubmit: () => void;
  onBlur: (value: string) => void;
}

export class SearchBar extends Component<ISearchBar> {
  constructor(props: ISearchBar) {
    super(props);
  }

  render() {
    const { inputValue, onSubmit, onBlur } = this.props;
    return (
      <div className={cls.SearchBar}>
        <Input
          className=""
          theme=""
          onBlur={onBlur}
          defaultValue={inputValue ? inputValue : undefined}
          placeholder="Enter name"
        />
        <Button
          onClick={onSubmit.bind(this)}
          className={''}
          size={ButtonSize.M}
          theme={ButtonTheme.BACKGROUND_DARK}
        >
          Search
        </Button>
      </div>
    );
  }
}

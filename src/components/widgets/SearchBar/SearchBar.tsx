import { Button, ButtonSize } from '../../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../../Input/Input';
import React, { useState, useCallback, memo } from 'react';
import { SEARCH_LOCALSTORAGE_KEY } from '../../../utils/constants/Constants';
import { useSearchParams } from 'react-router-dom';

interface ISearchBar {
  setSearch: (value: string) => void;
}

export const SearchBar = memo((props: ISearchBar) => {
  const { setSearch } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const onSubmit = () => {
    console.log(searchParams);
    setSearchParams((searchParams) => {
      searchParams.set('page', '1');
      return searchParams;
    });
    setSearch(inputValue ? inputValue : '');
  };

  return (
    <div className={cls.SearchBar}>
      <Input
        className=""
        theme=""
        onBlur={onBlur}
        defaultValue={inputValue ? inputValue : undefined}
        placeholder="Enter name"
      />
      <Button onClick={onSubmit} className={''} size={ButtonSize.M}>
        Search
      </Button>
    </div>
  );
});

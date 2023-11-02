import { Button, ButtonSize } from '../../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../../Input/Input';
import React, { useState, useCallback, memo } from 'react';
import { SEARCH_LOCALSTORAGE_KEY } from '../../../utils/constants/Constants';
import { MainPageRoutes } from '../../../app/providers/router/routeConfig/routeConfig';
import { SetURLSearchParams } from 'react-router-dom';

interface ISearchBarProps {
  setSearch: (value: string) => void;
  setSearchParams: SetURLSearchParams;
}

export const SearchBar = memo((props: ISearchBarProps) => {
  const { setSearch, setSearchParams } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const onSubmit = () => {
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.PAGE, '1');
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
        placeholder="Enter show"
      />
      <Button onClick={onSubmit} className={''} size={ButtonSize.M}>
        Search
      </Button>
    </div>
  );
});

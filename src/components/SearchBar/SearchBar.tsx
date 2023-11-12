import { Button, ButtonSize } from '../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../Input/Input';
import React, { useState, useCallback } from 'react';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { SetURLSearchParams } from 'react-router-dom';
import { DropDown } from '../DropDown/DropDown';
import { defaultPageSize } from '../../app/services/variables/variables';

const NUM_OF_ITEMS_VALUES = [defaultPageSize.toString(), '20', '10', '5'];

interface ISearchBarProps {
  setSearch: (value: string) => void;
  setSearchParams: SetURLSearchParams;
  setNumOfItems: (value: number) => void;
}

export const SearchBar = (props: ISearchBarProps) => {
  const { setSearch, setSearchParams, setNumOfItems } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const changeQuery = useCallback(() => {
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.PAGE, '1');
      return searchParams;
    });
  }, [setSearchParams]);

  const onSubmit = () => {
    localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, inputValue ? inputValue : '');
    changeQuery();
    setSearch(inputValue ? inputValue : '');
  };

  const onSelectNumOfItems = useCallback(
    (value: string) => {
      changeQuery();
      setNumOfItems(+value);
    },
    [changeQuery, setNumOfItems]
  );

  return (
    <div className={cls.SearchBar}>
      <Input
        data-testid="input"
        className=""
        theme=""
        onBlur={onBlur}
        defaultValue={inputValue ? inputValue : undefined}
        placeholder="Enter show"
      />
      <Button
        onClick={onSubmit}
        className={''}
        size={ButtonSize.M}
        data-testid="btn"
      >
        Search
      </Button>
      <DropDown values={NUM_OF_ITEMS_VALUES} onChange={onSelectNumOfItems} />
    </div>
  );
};

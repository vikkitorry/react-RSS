import { Button, ButtonSize } from '../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../Input/Input';
import React, { useState, useCallback } from 'react';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { SetURLSearchParams } from 'react-router-dom';
import { DropDown } from '../DropDown/DropDown';
import { defaultPageSize } from '../../app/services/variables/variables';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { showsSlice } from '../../store/reducers/ShowsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';

const NUM_OF_ITEMS_VALUES = [defaultPageSize.toString(), '20', '10', '5'];

interface ISearchBarProps {
  setSearchParams: SetURLSearchParams;
}

export const SearchBar = (props: ISearchBarProps) => {
  const { setSearchParams } = props;
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.searchReducer);
  const { setSearch } = searchSlice.actions;
  const { setNumOfShows } = showsSlice.actions;
  const [inputValue, setInputValue] = useState<string | undefined>(search);

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
    dispatch(setSearch(inputValue ? inputValue : ''));
  };

  const onSelectNumOfItems = useCallback(
    (value: string) => {
      changeQuery();
      dispatch(setNumOfShows(+value));
    },
    [changeQuery, setNumOfShows, dispatch]
  );

  return (
    <div className={cls.SearchBar}>
      <Input
        data-testid="input"
        className=""
        theme=""
        onBlur={onBlur}
        defaultValue={search ? search : undefined}
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

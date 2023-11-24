import { Button, ButtonSize } from '../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../Input/Input';
import React, { useState, useCallback } from 'react';
import { SEARCH_LOCALSTORAGE_KEY } from '@/src/utils/constants/Constants';
import { DropDown } from '../DropDown/DropDown';
import { defaultPageSize } from '@/src/services/variables/variables';
import { searchSlice } from '@/src/store/reducers/SearchSlice';
import { showsSlice } from '@/src/store/reducers/ShowsSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks/redux';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { MainPageRoutes } from '@/src/pages';

const NUM_OF_ITEMS_VALUES = [defaultPageSize.toString(), '20', '10', '5'];

interface ISearchBarProps {
  createQueryString: (name: string, value: string) => void;
}

export const SearchBar = (props: ISearchBarProps) => {
  const { createQueryString } = props;
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.searchReducer);
  const { setSearch } = searchSlice.actions;
  const { setNumOfShows } = showsSlice.actions;
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter()
  const pathname = usePathname()

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const changeQuery = useCallback(() => {
    // !!!!!!!!!!НАДО СРАЗУ МЕНЯТЬ ВСЕ параметры и лимит и запрос и страницу
    router.push(pathname + '?' + createQueryString(MainPageRoutes.page, `${1}`))
    router.push(pathname + '?' + createQueryString(MainPageRoutes.query, inputValue))
  }, []);

  const onSubmit = useCallback(() => {
    // localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, inputValue ? inputValue : '');
    changeQuery();
    // dispatch(setSearch(inputValue ? inputValue : ''));
  }, [changeQuery, setSearch, dispatch, inputValue]);

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

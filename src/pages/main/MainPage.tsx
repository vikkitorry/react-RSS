import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import React, { useState, useEffect, useCallback } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { AllCharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { NoResultsPage } from '../noResults/NoResultsPage';
import { Loader } from '../../components/widgets/Loader/Loader';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AllCharacterSchema | null>(null);

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    Service.getCharacter(inputValue)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [inputValue]);

  useEffect(() => {
    setIsLoading(true);
    inputValue
      ? onSubmit()
      : Service.getAllCharacters(inputValue)
          .then((data) => setData(data))
          .catch(() => setData(null))
          .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      <SearchBar onSubmit={onSubmit} onBlur={onBlur} inputValue={inputValue} />
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <GridTable elements={data.results} pages={data?.info.pages} />
      ) : (
        <NoResultsPage />
      )}
    </div>
  );
};

export default MainPage;

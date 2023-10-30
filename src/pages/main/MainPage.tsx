import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './mainPage.module.scss';
import React, { useState, useEffect } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { NoResultsPage } from '../noResults/NoResultsPage';
import { Loader } from '../../components/widgets/Loader/Loader';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<CharacterSchema[] | null>([]);

  const onBlur = (value: string) => {
    setInputValue(value);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await Service.getCharacter(inputValue)
      .then((cards) => (cards ? setCards(cards) : 0))
      .catch(() => setCards(null))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    inputValue
      ? onSubmit()
      : Service.getAllCharacters(inputValue)
          .then((cards) => (cards ? setCards(cards) : setCards(null)))
          .catch(() => setCards(null))
          .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      <SearchBar onSubmit={onSubmit} onBlur={onBlur} inputValue={inputValue} />
      {isLoading ? (
        <Loader />
      ) : cards ? (
        <GridTable elements={cards} />
      ) : (
        <NoResultsPage />
      )}
    </div>
  );
};

export default MainPage;

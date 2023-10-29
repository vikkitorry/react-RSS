export type CharacterSchema = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export type AllCharacterSchema = {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: Array<CharacterSchema>;
};

export const BASE_URL = 'https://rickandmortyapi.com/api/character/?';
export const BASE_URL_NAME = 'https://rickandmortyapi.com/api/character/?name=';
export const defaultPage = 'page=1';
export const ERROR_MESSAGE = 'There is nothing here';

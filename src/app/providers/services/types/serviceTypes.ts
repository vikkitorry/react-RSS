export type CharacterSchema = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export type ResponseInfo = {
  count: number;
  pages: number;
  next: null | string;
  prev: null | string;
};

export type AllCharacterSchema = {
  info: ResponseInfo;
  results: CharacterSchema[];
};

export const BASE_URL_NAME = 'https://rickandmortyapi.com/api/character/?name=';
export const BASE_URL_PAGE = 'https://rickandmortyapi.com/api/character/?page=';
export const NAME_ENDPOINT = '&name=';
export const defaultPage = '1';
export const ERROR_MESSAGE = 'There is nothing here';

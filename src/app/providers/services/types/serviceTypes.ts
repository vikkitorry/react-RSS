export type CharacterSchema = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
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

export const BASE_URL = 'https://rickandmortyapi.com/api/';

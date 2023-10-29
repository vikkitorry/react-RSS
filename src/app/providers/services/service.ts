import {
  CharacterSchema,
  AllCharacterSchema,
  BASE_URL_NAME,
} from './types/serviceTypes';
import { BASE_URL, ERROR_MESSAGE, defaultPage } from './types/serviceTypes';
import { SEARCH_LOCALSTORAGE_KEY } from '../../../utils/constants/Constants';

export default class Service {
  static async getCharacter(
    endpoint: string = ''
  ): Promise<CharacterSchema[] | undefined> {
    try {
      localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, endpoint);
      const resp = await fetch(`${BASE_URL_NAME}${endpoint}`);
      if (!resp.ok) {
        throw new Error();
      }
      const characters = (await resp.json()) as AllCharacterSchema;
      return characters.results;
    } catch (err) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  static async getAllCharacters(
    endpoint: string = defaultPage
  ): Promise<CharacterSchema[] | undefined> {
    try {
      const resp = await fetch(`${BASE_URL}${endpoint}`);
      if (!resp.ok) {
        throw new Error();
      }
      const characters = (await resp.json()) as AllCharacterSchema;
      return characters.results;
    } catch (err) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

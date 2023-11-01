import {
  AllCharacterSchema,
  BASE_URL_PAGE,
  NAME_ENDPOINT,
} from './types/serviceTypes';
import { ERROR_MESSAGE } from './types/serviceTypes';
import { SEARCH_LOCALSTORAGE_KEY } from '../../../utils/constants/Constants';

//it's not a react component, it's a part of service requests
//it's a best practise to do it in class, I don't want to change it in functions
export default class Service {
  // static async getCharacter(
  //   endpoint: string = ''
  // ): Promise<AllCharacterSchema> {
  //   try {
  //     localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, endpoint);
  //     const resp = await fetch(`${BASE_URL_NAME}${endpoint}`);
  //     if (!resp.ok) {
  //       throw new Error();
  //     }
  //     const characters = (await resp.json()) as AllCharacterSchema;
  //     return characters;
  //   } catch (err) {
  //     throw new Error(ERROR_MESSAGE);
  //   }
  // }

  static async getPage(
    page: number = 1,
    name: string = ''
  ): Promise<AllCharacterSchema> {
    try {
      localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, name);
      const resp = await fetch(
        `${BASE_URL_PAGE}${page}${NAME_ENDPOINT}${name}`
      );
      if (!resp.ok) {
        throw new Error();
      }
      const characters = (await resp.json()) as AllCharacterSchema;
      return characters;
    } catch (err) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

// export const getPage = async (
//   url: string | null
// ): Promise<AllCharacterSchema> => {
//   try {
//     const resp = await fetch(`${url}`);
//     if (!resp.ok) {
//       throw new Error();
//     }
//     const characters = (await resp.json()) as AllCharacterSchema;
//     return characters;
//   } catch (err) {
//     throw new Error(ERROR_MESSAGE);
//   }
// };

import { CharacterSchema, AllCharacterSchema } from './types/serviceTypes';
import { BASE_URL, ERROR_MESSAGE, defaultPage } from './types/serviceTypes';

export default class Service {
  static async getCharacter(
    endpoint: string
  ): Promise<CharacterSchema | undefined> {
    try {
      const resp = await fetch(`${BASE_URL}?${endpoint}`);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return await resp.json();
    } catch (err) {
      console.log(ERROR_MESSAGE);
    }
  }

  static async getAllCharacters(
    endpoint: string = defaultPage
  ): Promise<CharacterSchema[] | undefined> {
    try {
      const resp = await fetch(`${BASE_URL}?${endpoint}`);
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

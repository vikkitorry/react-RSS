import { CharacterSchema, AllCharacterSchema } from './types/serviceTypes';
import { BASE_URL } from './types/serviceTypes';

export default class Service {
  static async getCharacter(): Promise<CharacterSchema | undefined> {
    try {
      const resp = await fetch(`${BASE_URL}character`);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return await resp.json();
    } catch (err) {
      console.log('There is nothing here');
    }
  }

  static async getAllCharacter(): Promise<CharacterSchema[] | undefined> {
    try {
      const resp = await fetch(`${BASE_URL}character/?page=17`);
      if (!resp.ok) {
        throw new Error();
      }
      const characters = (await resp.json()) as AllCharacterSchema;
      return characters.results;
    } catch (err) {
      throw new Error('There is nothing here');
    }
  }
}

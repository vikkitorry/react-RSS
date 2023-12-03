export const SEARCH_LOCALSTORAGE_KEY = 'react-rss-vikkitorry-version.2.22';

export const gender = ['mail', 'femail'];

export enum FormKeys {
  name = 'name',
  age = 'age',
  email = 'email',
  password = 'password',
  passwordRepeat = 'passwordRepeat',
  gender = 'gender',
  acceptTC = 'acceptTC',
  picture = 'picture',
  country = 'country',
}

export interface IFormKeys {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  gender?: string;
  acceptTC?: boolean;
  picture?: FileList | null;
  country?: string;
}

export interface IFormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  gender?: string;
  acceptTC?: string;
  picture?: string;
  country?: string;
}

export interface IFormAfterValid {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordRepeat: string;
  gender: string;
  acceptTC: boolean;
  picture: FileList;
  country: string;
}

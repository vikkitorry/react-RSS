import { IFormErrors } from '../types/types';

export const gender = ['', 'mail', 'femail'];

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

export const errMssgInitial: IFormErrors = {
  name: '',
  age: '',
  email: '',
  password: '',
  passwordRepeat: '',
  country: '',
  acceptTC: '',
  picture: '',
  gender: '',
};

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

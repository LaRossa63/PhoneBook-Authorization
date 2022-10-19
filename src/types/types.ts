export enum LinksApi {
  baseUrl = 'https://connections-api.herokuapp.com',

  signUpUser = '/users/signup',
  signInUser = '/users/login',
  exitUser = '/users/logout',

  getAllContactsKey = 'contacts-list',
  getAllContacts = '/contacts',
  createNewContact = '/contacts',
  deleteContact = '/contacts',

  getCurrentUserKey = 'user',
  getCurrentUser = '/users/current',
}

export enum AppRoutes {
  home = '/',

  signUp = 'signup',
  signIn = 'signin',
  contacts = 'contacts',
}

export interface SignUpFormDTO {
  name: string;
  email: string;
  password: string;
}

export interface SignInFormDTO {
  email: string;
  password: string;
}

export interface CreateContactFormDTO {
  id: string;
  name: string;
  number: string;
}

export interface ResponseContactApi {
  id: string;
  name: string;
  number: string;
}

export interface ResponseSignUpApi {
  token: string;

  user: {
    email: string;
    name: string;
  };
}

export interface ResponseSignInApi {
  token: string;

  user: {
    email: string;
    name: string;
  };
}

export enum LinksApi {
  baseUrl = 'https://connections-api.herokuapp.com',

  registerUser = '/users/signup',
  loginUser = '/users/login',
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

  register = 'register',
  login = 'login',
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

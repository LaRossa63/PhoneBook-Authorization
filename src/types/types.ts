export enum Api {
  baseUrl = '',
}

export enum AppRoutes {
  home = '/',

  register = 'register',
  login = 'login',
  contacts = 'contacts',
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface CreateContactForm {
  id: string;
  name: string;
  number: string;
}

export interface ResponseContact {
  id: string;
  name: string;
  number: string;
}

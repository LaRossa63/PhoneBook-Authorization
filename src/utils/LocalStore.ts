const WRITE_TOKEN = 'token';

export const writeTokenLocalStore = (token: string = '') => {
  localStorage.setItem(WRITE_TOKEN, token);
};

export const getTokenLocalStore = () => {
  return localStorage.getItem(WRITE_TOKEN) || '';
};

export const removeTokenLocalStore = () => {
  localStorage.removeItem(WRITE_TOKEN);
};

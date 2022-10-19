import axios, { AxiosRequestConfig } from 'axios';
import { QueryClient } from 'react-query';
import { LinksApi } from 'types/types';
import { getTokenLocalStore } from 'utils/LocalStore';

export const Axios = axios.create({
  baseURL: LinksApi.baseUrl,

  headers: {
    Accept: `application/json`,
  },
});

Axios.interceptors.response.use((config) => {
  return config.data;
});

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};

    const token = getTokenLocalStore();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => error
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,

      retry: 1,
    },

    mutations: {
      retry: 1,
    },
  },
});

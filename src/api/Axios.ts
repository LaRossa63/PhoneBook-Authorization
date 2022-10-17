import axios from 'axios';
import { Api } from 'types/types';

export const Axios = axios.create({
  baseURL: Api.baseUrl,
});

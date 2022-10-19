import { Axios } from 'api';
import {
  ResponseSignInApi,
  ResponseSignUpApi,
  LinksApi,
  SignInFormDTO,
  SignUpFormDTO,
} from 'types/types';

export const UserService = {
  async registerUser(body: SignUpFormDTO): Promise<ResponseSignUpApi> {
    return await Axios.post(LinksApi.registerUser, body);
  },

  async loginUser(body: SignInFormDTO): Promise<ResponseSignInApi> {
    return await Axios.post(LinksApi.loginUser, body);
  },

  async exitUser() {
    return Axios.post(LinksApi.exitUser);
  },
};

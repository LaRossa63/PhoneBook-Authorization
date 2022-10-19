import { Axios } from 'api';
import {
  ResponseSignInApi,
  ResponseSignUpApi,
  LinksApi,
  SignInFormDTO,
  SignUpFormDTO,
} from 'types/types';

export const UserService = {
  async signUpUser(body: SignUpFormDTO): Promise<ResponseSignUpApi> {
    return await Axios.post(LinksApi.signUpUser, body);
  },

  async signInUser(body: SignInFormDTO): Promise<ResponseSignInApi> {
    return await Axios.post(LinksApi.signInUser, body);
  },

  async exitUser() {
    return Axios.post(LinksApi.exitUser);
  },
};

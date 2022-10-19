import { Axios } from 'api';
import {
  LinksApi,
  CreateContactFormDTO,
  ResponseContactApi,
} from 'types/types';

export const ContactService = {
  async getAllContacts(): Promise<ResponseContactApi[]> {
    return await Axios.get(LinksApi.getAllContacts);
  },

  async createContact(body: CreateContactFormDTO) {
    return await Axios.post(LinksApi.createNewContact, body);
  },

  async deleteContact(id: string) {
    return await Axios.delete(`${LinksApi.deleteContact}/${id}`);
  },
};

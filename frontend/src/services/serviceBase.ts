import axios from 'axios';

export const get = async <T>(url: string): Promise<T> => {
  axios.defaults.withCredentials = true;
  const response = await axios.get<T>(url);
  return response.data;
};

export const post = async <T>(url: string, obj: object): Promise<T> => {
  axios.defaults.withCredentials = true;
  const response = await axios.post<T>(url, obj);
  return response.data;
};

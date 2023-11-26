import axios, { AxiosError } from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/utils';

const setup = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  /**
   * Interceptador de erros.
   */
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 500) {
        console.log('Internal Server Error');
      }
      return Promise.reject(error);
    },
  );

  /**
   * Interceptar uma request para adicionar o token e a
   * linguagem no header da requisição.
   */
  api.interceptors.request.use((config) => {
    const user = getUserLocalStorage();

    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
    }
    return config;
  });

  return api;
};

export const api = setup();

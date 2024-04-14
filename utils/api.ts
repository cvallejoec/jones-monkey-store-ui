import axios, { AxiosError } from 'axios';

import { config } from './config';

export const api = axios.create({ baseURL: config.apiUrl });

export type FetchFunction = <T>(
  url: string,
  body?: any,
  headers?: any
) => Promise<T>;

export function createRequestMethod(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  onError: (error: AxiosError) => void
): FetchFunction {
  return async function (url: string, body: any, headers: any) {
    const token = localStorage.getItem('FRUCHETO_TOKEN');
    try {
      const response = await api(url, {
        method,
        ...(token && { headers: { Authorization: `Bearer ${token}` } }),
        data: body,
      });
      return response.data;
    } catch (error) {
      console.error('API: error', error);
      onError(error);
      throw error;
    }
  };
}

export function createRequestMethods(onError: (error: AxiosError) => void) {
  return {
    get: createRequestMethod('GET', onError),
    post: createRequestMethod('POST', onError),
    put: createRequestMethod('PUT', onError),
    patch: createRequestMethod('PATCH', onError),
    delete: createRequestMethod('DELETE', onError),
  };
}

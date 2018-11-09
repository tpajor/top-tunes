import axios, { AxiosPromise } from 'axios';

export default class HttpClient {
  get(url: string): AxiosPromise<any> {
    return axios.get(url);
  }

  post(url: string, payload: any): AxiosPromise<any> {
    return axios.put(url, payload);
  }

  put(url: string, payload: any): AxiosPromise<any> {
    return axios.put(url, payload);
  }

  delete(url: string): AxiosPromise<any> {
    return axios.delete(url);
  }
}

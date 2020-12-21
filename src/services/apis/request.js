import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
// import { requestHelpers } from 'helpers';
import { apiConstants } from "../../consts";
import { authServices } from "../index";

const Client = axios.create({
  baseURL: apiConstants.API_URL,
});

const getAuthorization = () => {
  return authServices.isLoggedIn() ? authServices.getAccessToken() : '';
};

// Do something before request is sent
const requestInterceptor = (request) => {
  request.headers.Authorization = getAuthorization();
  return request;
};

// Any status code that lie within the range of 2xx cause this function to trigger
const responseSuccessInterceptor = (response) => {
  // Do something with response data
  return response;
};

// Any status codes that falls outside the range of 2xx cause this function to trigger
const responseErrorInterceptor = (error) => {
  // Do something with response error
  // requestHelpers.handleResponseError(error);
  // return Promise.reject(error);
  return error;
};

const clients = [Client];

clients.forEach(client => {
  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  );
});

export default Client;

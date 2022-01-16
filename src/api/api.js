/* eslint-disable no-param-reassign */
import axios from 'axios';
import 'regenerator-runtime/runtime.js';

const REQUEST_TIMEOUT = 5000;

const ApiRoute = {
  LOGIN: '/api/v1/login',
  REGISTER: '/api/v1/signup',
  DATA: '/api/v1/data',
};

const createApi = () => axios.create({
  timeout: REQUEST_TIMEOUT,
});

const api = createApi();

const login = async ({ username, password }) => {
  const { data } = await api.post(ApiRoute.LOGIN, { username, password });
  return data;
};

const register = async ({ username, password }) => {
  const { data } = await api.post(ApiRoute.REGISTER, { username, password });
  return data;
};

const loadData = async (headers) => {
  const { data } = await api.get(ApiRoute.DATA, { headers });
  return data;
};

export { login, loadData, register };

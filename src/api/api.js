/* eslint-disable no-param-reassign */
import axios from 'axios';
import 'regenerator-runtime/runtime.js';

const REQUEST_TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token') ?? '';

      if (token) {
        const formatted = token.replace(/"/g, '');
        config.headers = ({ ...config.headers, Authorization: `Bearer ${formatted}` });
      }

      return config;
    },
  );

  return api;
};

const api = createApi();

const login = async ({ username, password }) => {
  const url = '/api/v1/login';

  const { data } = await api.post(url, { username, password });
  return data;
};

const loadChannels = async () => {
  const url = '/api/v1/data';

  const { data } = await api.get(url);
  return data;
};

export { login, loadChannels };

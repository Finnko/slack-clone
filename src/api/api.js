import axios from 'axios';
import 'regenerator-runtime/runtime.js';

const login = async ({ username, password }) => {
  const url = '/api/v1/login';

  const { data } = await axios.post(url, { username, password });
  return data;
};

export { login };

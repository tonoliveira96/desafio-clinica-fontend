import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

const apiCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export {apiCEP }

export default api;

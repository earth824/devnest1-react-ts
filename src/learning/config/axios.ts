import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7999';

axios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

export default axios;

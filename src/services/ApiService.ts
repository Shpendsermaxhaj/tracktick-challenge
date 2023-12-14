import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://tracktik-challenge.staffr.com',
});

export default api;

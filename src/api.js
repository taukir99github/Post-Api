import axios from 'axios';

const API_URL = 'https://dummyapi.io/data/v1';
const APP_ID = '611e2d693e87ab822c034bbc';  

const api = axios.create({
  baseURL: API_URL,
  headers: { 'app-id': APP_ID }
});

export const fetchPosts = () => api.get('/post');
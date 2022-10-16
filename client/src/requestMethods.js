import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ViNWNkZTU2NGJhN2VmZjc5YjVkMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkxOTQxOSwiZXhwIjoxNjY2MTc4NjE5fQ.d3jdxxLxx6-qRUcqwgZbhZwjY441tjQmOzcEYfc0tI4';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: `Bearer ${TOKEN}`,
});

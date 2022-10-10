import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ViNWNkZTU2NGJhN2VmZjc5YjVkMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTM4OTMwOCwiZXhwIjoxNjY1NjQ4NTA4fQ.AXGYHvqYd-vqv_k8XgH0NHV-FrsPaU4Hb3zUKzOmJVw';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: `Bearer ${TOKEN}`,
});

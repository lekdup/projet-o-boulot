import axios from 'axios';

const api = axios.create({
  baseURL: 'http://isisyoussef-server.eddi.cloud/projet-o-boulot-back/public/api'
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if(token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request;
})

export default api;
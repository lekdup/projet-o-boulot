import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/dossier-projet/projet-o-boulot/back/app/Controllers'
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if(token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request;
})

export default api;
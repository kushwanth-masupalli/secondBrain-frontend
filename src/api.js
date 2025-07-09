import axios from 'axios';

const api = axios.create({
  baseURL: 'https://secondbrain-backend-1-2l3y.onrender.com/api'
});

export const addIntent = ({ input }) => api.post('/add', { input });
export const getAllIntents = () => api.get('/getAll');
export const getByCategory = (intent) => api.post('/getByCategory', { intent });
export const getByDate = (date) => api.post('/getByDate', { date });
export const deleteIntent = (id) => api.delete(`/${id}`);
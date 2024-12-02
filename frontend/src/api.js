import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/transactions', 
});

export const getTransactions = () => API.get('/');
export const addTransaction = (transaction) => API.post('/', transaction);
export const deleteTransaction = (id) => API.delete(`/${id}`);

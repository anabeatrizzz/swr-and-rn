import api from './api';

async function getUsersPagination(){
  const response = await api.get('/users?_start=0&_limit=2')
  return response.data
}

export {
  getUsersPagination
}
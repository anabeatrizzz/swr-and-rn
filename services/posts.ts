import api from './api';

async function getPostsWithPagination(limit: number = 2){
  const response = await api.get(`/posts?_start=0&_limit=${limit}`)
  return response.data
}

export { getPostsWithPagination }
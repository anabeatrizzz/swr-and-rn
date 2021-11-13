import api from './api';
const endpoint = '/v1/neighborhood'

async function getNeighborhoods(){
  const response = await api.get(endpoint)
  return response.data
}

export {
  getNeighborhoods
}
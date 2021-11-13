import api from './api';
const endpoint = "/v1/city"

async function getCities(){
  const response = await api.get(endpoint)
  return response.data
}

export {
  getCities
}
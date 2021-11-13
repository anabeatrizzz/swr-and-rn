import api from './api';
const endpoint = "/v1/city"

async function getCities(){
  const response = await api.get(endpoint)
  return response.data
}

async function putCitie(newData: any){
  const response = await api.get(endpoint, newData)
  return response.data
}

export {
  getCities,
  putCitie
}
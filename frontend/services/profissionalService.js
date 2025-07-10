import axios from 'axios'

const API_URL = 'http://localhost:3001/professionals'

export const cadastrarProfissional = async (dados) => {
  return axios.post(API_URL, dados)
}

export const listarProfissionais = async () => {
  return axios.get(API_URL)
}

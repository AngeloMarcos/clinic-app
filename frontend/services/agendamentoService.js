import axios from 'axios'

const API_URL = 'http://localhost:3001/appointments'

export const cadastrarAgendamento = async (dados) => {
  return axios.post(API_URL, dados)
}

export const listarAgendamentos = async () => {
  return axios.get(API_URL)
}

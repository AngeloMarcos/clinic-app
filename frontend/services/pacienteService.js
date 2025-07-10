// Em breve: conexão com API real
// Aqui por enquanto apenas mock ou base para axios
import axios from 'axios'

const API_URL = 'http://localhost:3001/patients' // ajustar quando o backend estiver pronto

export const cadastrarPaciente = async (dados) => {
  return axios.post(API_URL, dados)
}

export const listarPacientes = async () => {
  return axios.get(API_URL)
}

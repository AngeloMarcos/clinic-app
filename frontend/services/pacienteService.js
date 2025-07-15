// Em breve: conexão com API real
// Aqui por enquanto apenas mock ou base para axios
import axios from 'axios'
const API = process.env.NEXT_PUBLIC_API_URL
export const listarPacientes = () => axios.get(`${API}/patients`)


export const cadastrarPaciente = async (dados) => {
  return axios.post(API_URL, dados)
}

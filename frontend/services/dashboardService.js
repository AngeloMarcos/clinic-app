import axios from 'axios'

const API = process.env.NEXT_PUBLIC_API_URL

export const contarPacientes = () => axios.get(`${API}/patients`)
export const contarProfissionais = () => axios.get(`${API}/professionals`)
export const listarAgendamentos = () => axios.get(`${API}/appointments`)

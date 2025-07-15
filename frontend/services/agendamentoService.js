import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/appointments'

export const cadastrarAgendamento = async (dados) => axios.post(API_URL, dados)
export const listarAgendamentos = async () => axios.get(API_URL)

import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { listarAgendamentos } from '../services/agendamentoService'

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {
    listarAgendamentos()
      .then(res => setAgendamentos(res.data))
      .catch(() => alert('Erro ao carregar agendamentos'))
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Agendamentos</h1>
      <ul className="space-y-4">
        {agendamentos.map((ag, index) => (
          <li key={index} className="p-4 bg-white rounded shadow">
            <p><strong>Data:</strong> {ag.data} às {ag.hora}</p>
            <p><strong>Motivo:</strong> {ag.motivo}</p>
            <p><strong>Paciente:</strong> {ag.paciente?.nome}</p>
            <p><strong>Profissional:</strong> {ag.profissional?.nome}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

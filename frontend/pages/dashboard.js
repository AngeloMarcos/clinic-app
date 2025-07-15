import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { contarPacientes, contarProfissionais, listarAgendamentos } from '../services/dashboardService'
import AgendamentosPorDia from '../components/AgendamentosPorDia'
import AgendamentosPorProfissional from '../components/AgendamentosPorProfissional'

export default function Dashboard() {
  const [totais, setTotais] = useState({
    pacientes: 0,
    profissionais: 0,
    agendamentos: 0,
    hoje: 0,
  })

  useEffect(() => {
    Promise.all([
      contarPacientes(),
      contarProfissionais(),
      listarAgendamentos()
    ]).then(([resPac, resProf, resAg]) => {
      const agendamentos = resAg.data
      const hoje = new Date().toISOString().split('T')[0]
      const doDia = agendamentos.filter(a => a.data === hoje)
      setTotais({
        pacientes: resPac.data.length,
        profissionais: resProf.data.length,
        agendamentos: agendamentos.length,
        hoje: doDia.length
      })
    })
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card label="Pacientes" value={totais.pacientes} />
        <Card label="Profissionais" value={totais.profissionais} />
        <Card label="Agendamentos" value={totais.agendamentos} />
        <Card label="Hoje" value={totais.hoje} />
        <AgendamentosPorDia />
        <AgendamentosPorProfissional />

      </div>
    </Layout>
  )
}

function Card({ label, value }) {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-bold text-blue-700">{value}</p>
    </div>
  )
}

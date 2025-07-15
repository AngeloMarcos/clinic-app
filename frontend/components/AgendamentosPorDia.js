import { useEffect, useState } from 'react'
import { listarAgendamentos } from '../services/dashboardService'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AgendamentosPorDia() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    listarAgendamentos().then(res => {
      const agrupados = agruparPorData(res.data)
      setDados(agrupados)
    })
  }, [])

  function agruparPorData(agendamentos) {
    const mapa = {}
    agendamentos.forEach(({ data }) => {
      mapa[data] = (mapa[data] || 0) + 1
    })
    return Object.entries(mapa).map(([data, total]) => ({ data, total }))
  }

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Agendamentos por Dia</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#1D4ED8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

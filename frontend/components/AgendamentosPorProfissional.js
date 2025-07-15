import { useEffect, useState } from 'react'
import { listarAgendamentos } from '../services/dashboardService'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AgendamentosPorProfissional() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    listarAgendamentos().then(res => {
      const agrupados = agrupar(res.data)
      setDados(agrupados)
    })
  }, [])

  function agrupar(lista) {
    const mapa = {}
    lista.forEach(({ profissional }) => {
      if (!profissional) return
      const nome = profissional.nome
      mapa[nome] = (mapa[nome] || 0) + 1
    })
    return Object.entries(mapa).map(([nome, total]) => ({ nome, total }))
  }

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Agendamentos por Profissional</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados}>
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#FF6600" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

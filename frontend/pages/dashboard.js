import Layout from '../components/Layout'

export default function Dashboard() {
  // Dados mockados (futuramente virão da API)
  const stats = [
    { label: 'Pacientes cadastrados', value: 132 },
    { label: 'Profissionais ativos', value: 8 },
    { label: 'Consultas marcadas hoje', value: 27 },
    { label: 'Consultas no mês', value: 340 }
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-center">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

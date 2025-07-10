import Layout from '../../components/Layout'
import Link from 'next/link'

export default function ListaProfissionais() {
  const profissionais = [
    { id: 1, nome: 'Dra. Ana Paula', especialidade: 'Cardiologia' },
    { id: 2, nome: 'Dr. João Lima', especialidade: 'Ortopedia' }
  ]

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Profissionais</h1>
        <Link href="/profissionais/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Novo Profissional
        </Link>
      </div>
      <ul className="space-y-2">
        {profissionais.map(p => (
          <li key={p.id} className="p-4 bg-white shadow rounded">
            <p className="font-semibold">{p.nome}</p>
            <p className="text-gray-600 text-sm">{p.especialidade}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

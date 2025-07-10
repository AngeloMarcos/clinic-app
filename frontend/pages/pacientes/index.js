import Layout from '../../components/Layout'
import Link from 'next/link'

export default function ListaPacientes() {
  // (Mock) Lista local por enquanto
  const pacientes = [
    { id: 1, nome: 'João da Silva', cpf: '123.456.789-00' },
    { id: 2, nome: 'Maria Oliveira', cpf: '987.654.321-00' }
  ]

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pacientes</h1>
        <Link href="/pacientes/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Novo Paciente
        </Link>
      </div>
      <ul className="space-y-2">
        {pacientes.map(p => (
          <li key={p.id} className="p-4 bg-white shadow rounded">
            <p className="font-semibold">{p.nome}</p>
            <p className="text-gray-600 text-sm">{p.cpf}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

import Layout from '../../components/Layout'
import { useState } from 'react'

export default function NovoPaciente() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ nome, cpf }) // no futuro: enviar via API
    alert('Paciente cadastrado (simulado)')
    setNome('')
    setCpf('')
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Cadastrar Paciente</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
            className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-medium">CPF:</label>
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}
            className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Salvar
        </button>
      </form>
    </Layout>
  )
}

import Layout from '../../components/Layout'
import { useState } from 'react'

export default function NovoProfissional() {
  const [nome, setNome] = useState('')
  const [especialidade, setEspecialidade] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ nome, especialidade })
    alert('Profissional cadastrado (simulado)')
    setNome('')
    setEspecialidade('')
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Cadastrar Profissional</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
            className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-medium">Especialidade:</label>
          <input type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}
            className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Salvar
        </button>
      </form>
    </Layout>
  )
}

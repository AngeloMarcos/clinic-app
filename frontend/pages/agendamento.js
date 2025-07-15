import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { cadastrarAgendamento } from '../services/agendamentoService'
import { listarPacientes } from '../services/pacienteService'
import { listarProfissionais } from '../services/profissionalService'

export default function Agendamento() {
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [motivo, setMotivo] = useState('')
  const [pacienteId, setPacienteId] = useState('')
  const [profissionalId, setProfissionalId] = useState('')
  const [pacientes, setPacientes] = useState([])
  const [profissionais, setProfissionais] = useState([])

  useEffect(() => {
    listarPacientes().then(res => setPacientes(res.data))
    listarProfissionais().then(res => setProfissionais(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await cadastrarAgendamento({
      data,
      hora,
      motivo,
      paciente: pacienteId,
      profissional: profissionalId
    })
    alert('Agendamento criado!')
    setData('')
    setHora('')
    setMotivo('')
    setPacienteId('')
    setProfissionalId('')
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Novo Agendamento</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block">Data:</label>
          <input type="date" value={data} onChange={e => setData(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block">Hora:</label>
          <input type="time" value={hora} onChange={e => setHora(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block">Motivo:</label>
          <input type="text" value={motivo} onChange={e => setMotivo(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block">Paciente:</label>
          <select value={pacienteId} onChange={e => setPacienteId(e.target.value)} className="w-full border px-3 py-2 rounded" required>
            <option value="">Selecione...</option>
            {pacientes.map(p => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Profissional:</label>
          <select value={profissionalId} onChange={e => setProfissionalId(e.target.value)} className="w-full border px-3 py-2 rounded" required>
            <option value="">Selecione...</option>
            {profissionais.map(p => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Agendar
        </button>
      </form>
    </Layout>
  )
}

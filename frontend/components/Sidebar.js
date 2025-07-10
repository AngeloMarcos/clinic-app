import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">ClinicApp</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block hover:bg-blue-700 px-3 py-2 rounded">Dashboard</Link>
        <Link href="/agendamento" className="block hover:bg-blue-700 px-3 py-2 rounded">Agendamento</Link>
        <Link href="/pacientes" className="block hover:bg-blue-700 px-3 py-2 rounded">Pacientes</Link>
        <Link href="/profissionais" className="block hover:bg-blue-700 px-3 py-2 rounded">Profissionais</Link>
      </nav>
    </aside>
  );
}

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Bem-vindo(a)</h1>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Sair
      </button>
    </header>
  );
}

import { ThemeToggle } from './ui/ThemeToggle';

export function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Malla Curricular - Ingeniería de Software</h1>
          <p className="text-sm">Escuela Politécnica Nacional - Pénsum 2020</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
} 
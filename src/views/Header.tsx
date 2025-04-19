import { ThemeToggle } from './ui/ThemeToggle';

export function Header() {
  return (
    <header className="bg-blue-900 dark:bg-gray-900 text-white border-b border-blue-800 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Malla Curricular - Ingeniería de Software</h1>
          <p className="text-sm text-blue-100 dark:text-gray-300">
            Escuela Politécnica Nacional - Pénsum 2020
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 
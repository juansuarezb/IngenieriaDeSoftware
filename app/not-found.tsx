import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">La página que estás buscando no existe o ha sido movida.</p>
        <Link href="/">
          <Button className="px-6">Volver a la Malla Curricular</Button>
        </Link>
      </div>
    </div>
  )
}

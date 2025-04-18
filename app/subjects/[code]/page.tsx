import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { subjectsData } from "@/data/subjects"

export async function generateStaticParams() {
  return subjectsData.map((subject) => ({
    code: subject.code,
  }))
}

export default function SubjectPage({ params }: { params: { code: string } }) {
  const subject = subjectsData.find((s) => s.code === params.code)

  if (!subject) {
    notFound()
  }

  // Find prerequisite subjects
  const prerequisiteSubjects = subject.prerequisites
    ? subject.prerequisites.map((code) => subjectsData.find((s) => s.code === code)).filter(Boolean)
    : []

  // Find subjects that have this subject as a prerequisite
  const isPrerequisiteFor = subjectsData.filter((s) => s.prerequisites && s.prerequisites.includes(subject.code))

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Volver a la Malla
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold">{subject.name}</h1>
          <div className="flex items-center gap-3 mt-2">
            <Badge variant="outline" className="text-white border-white">
              {subject.code}
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              {subject.credits} créditos
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              {subject.hours} horas
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Descripción de la Asignatura</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{subject.description || "Esta asignatura no tiene una descripción detallada disponible."}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Temario</CardTitle>
              </CardHeader>
              <CardContent>
                {subject.syllabus ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {subject.syllabus.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>El temario detallado no está disponible actualmente.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recursos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Sílabo
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    Bibliografía
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Material de Clase
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                    </svg>
                    Ejercicios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información General</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Nivel</h3>
                    <p>{subject.semester}° Semestre</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Unidad</h3>
                    <p>
                      {subject.unitType === "basic"
                        ? "Básica"
                        : subject.unitType === "professional"
                          ? "Profesional"
                          : subject.unitType === "integration"
                            ? "Integración"
                            : "No especificada"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Área</h3>
                    <p>{subject.area || "No especificada"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Profesor</h3>
                    <p>{subject.professor || "Por asignar"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {prerequisiteSubjects.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Prerrequisitos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prerequisiteSubjects.map((prereq) => (
                      <li key={prereq?.code} className="border rounded-md p-3 hover:bg-gray-50">
                        <Link href={`/subjects/${prereq?.code}`} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{prereq?.name}</p>
                            <p className="text-sm text-gray-500">{prereq?.code}</p>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {isPrerequisiteFor.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Es Prerrequisito de</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {isPrerequisiteFor.map((nextSubject) => (
                      <li key={nextSubject.code} className="border rounded-md p-3 hover:bg-gray-50">
                        <Link href={`/subjects/${nextSubject.code}`} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{nextSubject.name}</p>
                            <p className="text-sm text-gray-500">{nextSubject.code}</p>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

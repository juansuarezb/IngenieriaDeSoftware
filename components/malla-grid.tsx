"use client"

import { useState } from "react"
import Link from "next/link"
import { SubjectCard } from "@/components/subject-card"
import { subjectsData } from "@/data/subjects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MallaGrid() {
  const [activeTab, setActiveTab] = useState("grid")

  // Group subjects by semester
  const subjectsBySemester = subjectsData.reduce(
    (acc, subject) => {
      const semester = subject.semester
      if (!acc[semester]) {
        acc[semester] = []
      }
      acc[semester].push(subject)
      return acc
    },
    {} as Record<number, typeof subjectsData>,
  )

  return (
    <div>
      <Tabs defaultValue="grid" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="grid" onClick={() => setActiveTab("grid")}>
            Vista de Malla
          </TabsTrigger>
          <TabsTrigger value="list" onClick={() => setActiveTab("list")}>
            Vista de Lista
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4 overflow-x-auto">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((semester) => (
              <div key={semester} className="min-w-[250px]">
                <div className="bg-blue-700 text-white py-2 px-4 rounded-t-lg font-medium text-center">
                  Nivel {semester}
                </div>
                <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-b-lg min-h-[500px]">
                  {subjectsBySemester[semester]?.map((subject) => (
                    <Link href={`/subjects/${subject.code}`} key={subject.code}>
                      <SubjectCard subject={subject} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-6">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((semester) => (
              <div key={semester} className="border rounded-lg overflow-hidden">
                <div className="bg-blue-700 text-white py-2 px-4 font-medium">Nivel {semester}</div>
                <div className="divide-y">
                  {subjectsBySemester[semester]?.map((subject) => (
                    <Link href={`/subjects/${subject.code}`} key={subject.code} className="block hover:bg-gray-50">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{subject.name}</h3>
                          <p className="text-sm text-gray-500">
                            {subject.code} • {subject.credits} créditos • {subject.hours} horas
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

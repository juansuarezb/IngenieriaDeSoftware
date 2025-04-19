"use client"

import { useState } from 'react'
import { subjects } from '@/data/subjects'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function MallaGrid() {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null)

  const semesters = Array.from(new Set(subjects.map(s => s.semester))).sort((a, b) => a - b)

  const getSubjectsByLevel = (level: number) => {
    return subjects.filter(s => s.semester === level)
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'basic':
        return 'default'
      case 'professional':
        return 'secondary'
      case 'integration':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {semesters.map((semester) => (
          <button
            key={semester}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedSemester === semester
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/50 hover:bg-secondary/80'
            }`}
            onClick={() => setSelectedSemester(semester === selectedSemester ? null : semester)}
          >
            Nivel {semester}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(selectedSemester ? getSubjectsByLevel(selectedSemester) : subjects).map((subject) => (
          <Card key={subject.code}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{subject.name}</CardTitle>
                <Badge variant={getBadgeColor(subject.unitType)}>
                  {subject.unitType}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Código:</span>
                  <span className="font-medium">{subject.code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Créditos:</span>
                  <span className="font-medium">{subject.credits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Horas:</span>
                  <span className="font-medium">{subject.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nivel:</span>
                  <span className="font-medium">{subject.semester}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 
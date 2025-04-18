import { cn } from "@/lib/utils"
import type { Subject } from "@/types/subject"

interface SubjectCardProps {
  subject: Subject
}

export function SubjectCard({ subject }: SubjectCardProps) {
  // Determine the color based on the unit type
  const getUnitColor = (unitType: string) => {
    switch (unitType) {
      case "basic":
        return "bg-blue-500"
      case "professional":
        return "bg-green-500"
      case "integration":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  // Determine if the card should have a border (has prerequisites)
  const hasBorder = subject.prerequisites && subject.prerequisites.length > 0

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer",
        hasBorder && "border-2 border-red-500",
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-sm">{subject.name}</h3>
        <div className={cn("w-3 h-3 rounded-full", getUnitColor(subject.unitType))}></div>
      </div>

      <div className="text-xs text-gray-500 mb-2">{subject.code}</div>

      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
          <span>{subject.credits} créditos</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{subject.hours} horas</span>
        </div>
      </div>
    </div>
  )
}

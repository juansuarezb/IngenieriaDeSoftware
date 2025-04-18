export interface Subject {
  code: string
  name: string
  credits: number
  hours: number
  semester: number
  unitType: "basic" | "professional" | "integration"
  area?: string
  description?: string
  syllabus?: string[]
  professor?: string
  prerequisites?: string[]
}

export interface Subject {
  code: string;
  name: string;
  credits: number;
  hours: number;
  semester: number;
  unitType: 'basic' | 'professional' | 'integration';
  prerequisites?: string[];
}

export const subjects: Subject[] = [
  {
    code: 'ICCD323',
    name: 'Fundamentos de Programación',
    credits: 6,
    hours: 8,
    semester: 1,
    unitType: 'basic',
  },
  {
    code: 'ICCD324',
    name: 'Matemáticas Discretas',
    credits: 4,
    hours: 6,
    semester: 1,
    unitType: 'basic',
  },
  // Aquí puedes agregar más asignaturas
] 
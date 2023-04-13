import { teacherAndImprover } from '~/constants'

export function useTeacherImprover() {
  return useState('teacher-improver', () => teacherAndImprover[0].value)
}

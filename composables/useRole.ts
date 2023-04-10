import { whatRole } from '~/constants'

export function useRole() {
  return useState('role', () => whatRole[0])
}

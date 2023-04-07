import { whatRole } from '~/constants/scripts'

export function useRole() {
  return useState('role', () => whatRole[0])
}

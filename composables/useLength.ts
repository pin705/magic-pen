import { advanced } from '~/constants'

export function useLength() {
  return useState('length', () => advanced.length[0])
}

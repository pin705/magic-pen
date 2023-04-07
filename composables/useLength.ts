import { advanced } from '~/constants/scripts'

export function useLength() {
  return useState('length', () => advanced.length[0])
}

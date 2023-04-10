import { advanced } from '~/constants'

export function useTone() {
  return useState('tone', () => advanced.tone[0])
}

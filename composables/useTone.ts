import { advanced } from '~/constants/scripts'

export function useTone() {
  return useState('tone', () => advanced.tone[0])
}

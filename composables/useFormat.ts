import { advanced } from '~/constants'

export function useFormat() {
  return useState('format', () => advanced.format[0])
}

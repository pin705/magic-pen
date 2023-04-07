import { advanced } from '~/constants/scripts'

export function useFormat() {
  return useState('format', () => advanced.format[0])
}

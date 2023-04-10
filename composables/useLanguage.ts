import { language } from '~/constants'

export function useLanguage() {
  return useState('language', () => language[0])
}

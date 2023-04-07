import { language } from '~/constants/scripts'

export function useLanguage() {
  return useState('language', () => language[0])
}

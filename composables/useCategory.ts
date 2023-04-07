import { category } from '~/constants/scripts'

export function useCategory() {
  return useState('category', () => category[0].key)
}

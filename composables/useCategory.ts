import { category } from '~/constants'

export function useCategory() {
  return useState('category', () => category[0].key)
}

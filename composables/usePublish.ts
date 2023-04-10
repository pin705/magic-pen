import { advanced } from '~/constants'

export function usePublish() {
  return useState('publish', () => advanced.publish[0])
}

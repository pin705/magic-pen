import { advanced } from '~/constants/scripts'

export function usePublish() {
  return useState('publish', () => advanced.publish[0])
}

import { wantToWrite } from '~/constants'

export function useWantWrite() {
  return useState('want-write', () => wantToWrite[0])
}

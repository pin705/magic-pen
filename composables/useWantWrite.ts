import { wantToWrite } from '~/constants/scripts'

export function useWantWrite() {
  return useState('want-write', () => wantToWrite[0])
}

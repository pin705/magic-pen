import { codingTaskOptions } from '~/constants'

export function useCodingOption() {
  return useState('useCodingOption', () => codingTaskOptions[0].value)
}

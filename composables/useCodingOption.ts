import { codingTaskOptions } from '~/constants/scripts'

export function useCodingOption() {
  return useState('useCodingOption', () => codingTaskOptions[0].value)
}

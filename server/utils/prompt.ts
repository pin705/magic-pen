import type { RequestSubmitGPT } from '~/server/types'

export function prompts(request: Partial<RequestSubmitGPT>) {
  switch (request.category) {
    case 1:
      return writeScripts(request)
    case 2:
      return translateScripts(request)
    case 3:
      return grammarScripts(request)
    case 4:
      return codingScripts(request)
    default:
      return writeScripts(request)
  }
}

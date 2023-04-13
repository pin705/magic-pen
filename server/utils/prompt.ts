import type { RequestSubmitGPT } from '~/server/types'

export function prompts(request: Partial<RequestSubmitGPT>) {
  if (request.category === 1)
    return writeScripts(request)

  // Category 2 is Translate
  if (request.category === 2)
    return translateScripts(request)

  if (request.category === 3)
    return grammarScripts(request)

  if (request.category === 4)
    return codingScripts(request)

  // Category 5 is Wikipedia
  if (request.category === 5)
    return wikipediaScripts(request)

  if (request.category === 6)
    return teacherImprover()
}

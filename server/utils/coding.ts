import type { RequestSubmitGPT } from '~/server/types'

export function codingScripts(request: Partial<RequestSubmitGPT>) {
  switch (request.codeTask) {
    case 'add-commit-change':
      return `Write a git commit message in present tense for the following diff without prefacing it with anything. 
      Do not be needlessly verbose and make sure the answer is concise and to the point. 
      The response must be in the language ${request.lang} ${request.text}`
  }
}

import type { RequestSubmitGPT } from '~/server/types'

export function codingScripts(request: Partial<RequestSubmitGPT>) {
  switch (request.codeTask) {
    case 'add-commit-change':
      return `Write a git commit message in present tense for the following diff without prefacing it with anything. 
      Do not be needlessly verbose and make sure the answer is concise and to the point. 
      The response must be in the language ${request.lang} ${request.text}`

    case 'regex':
      return `I want you to act as a regex generator. 
      Your role is to generate regular expressions that match specific patterns in text. 
      You should provide the regular expressions in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. 
      Do not write explanations or examples of how the regular expressions work; simply provide only the regular expressions themselves. 
      My first prompt is ${request.text}`
  }
}

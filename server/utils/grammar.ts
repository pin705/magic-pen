import type { RequestSubmitGPT } from '~/server/types'

export function grammarScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act as a grammar checker. 
    I will write a sentence, and you will correct the grammar. 
    I want you to only reply the correction, the improvements and nothing else, do not write explanations. 
    My first sentence is "${request.text}."`
}

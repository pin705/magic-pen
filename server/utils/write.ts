import type { RequestSubmitGPT } from '~/server/types'

export function writeScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act like {${request.role}}. 
    You will ${request.wantWrite}.
    My first sentence is "${request.text}".
    I need you following criteria:
    Publish: ${request.where}
    Text intonation ${request.tone}
    Size content ${request.length}
    Returned content is ${request.format}
    Language: ${request.lang}
    `
}

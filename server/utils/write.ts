import type { RequestSubmitGPT } from '~/server/types'

export function writeScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act like {${request.role}}. 
    You will ${request.wantWrite}.
    My first sentence is "${request.text}".
    I need you following criteria:
    Publish: ${request.where}
    Right text style [${request.tone}]
    Right text length [${request.length}]
    The text you return should be [${request.format}]
    the language you return should be [${request.lang}]
    `
}

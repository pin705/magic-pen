import type { RequestSubmitGPT } from '~/server/types'

export function writeScripts(request: Partial<RequestSubmitGPT>) {
  let lang = 'My first sentence said in any language and you will detect the language and reply back in that language'
  if (request.lang !== 'Automatic')
    lang = `My first sentence said in any language and you will detect the language and reply back with ${request.lang}`

  return `I want you to act like {${request.role}}. 
    You will ${request.wantWrite}.
    My first sentence is "${request.text}".
    ${lang}
    I need you following criteria:
    Publish: ${request.where}
    Text intonation ${request.tone}
    Size content ${request.length}
    Returned content is ${request.format}
    `
}

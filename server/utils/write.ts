import type { RequestSubmitGPT } from '~/server/types'

export function writeScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act as a ${request.role}. 
    You will write about ${request.wantWrite} and tell about "${request.text}". 
    Following criteria: 
    \nThe language is ${request.lang}, 
    \nthe tone is ${request.tone}, 
    \nthis posts format ${request.format}, 
    \nthis posts has length ${request.length}, the publish is ${request.where}.`
}

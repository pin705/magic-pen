import type { RequestSubmitGPT } from '~/server/types'

export function translateScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act as an ${request.lang} translator, spelling corrector and improver. 
      I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in ${request.lang}.
      I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level ${request.length} words and sentences.
      Keep the meaning same, but make them more literary.
      I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "${request.text}."`
}

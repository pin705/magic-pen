import type { RequestSubmitGPT } from '~/server/types'

export function scripts(request: Partial<RequestSubmitGPT>) {
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

  if (request.category === 6) {
    return `I want you to translate the sentences I wrote into emojis. 
    I will write the sentence, and you will express it with emojis. I just want you to express it with emojis. 
    I don't want you to reply with anything but emoji. When I need to tell you something in ${request.lang}}, 
    I will do it by wrapping it in curly brackets like {like this}. My first sentence is "${request.text}"`
  }
}

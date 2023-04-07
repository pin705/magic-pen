import type { RequestSubmitGPT } from '~/server/types'

export function detectContent(request: Partial<RequestSubmitGPT>) {
  if (request.category === 1) {
    return `I want you to act as a ${request.role}. 
    You will write about ${request.wantWrite} and tell about "${request.text}". 
    Following criteria: 
    \nThe language is ${request.lang}, 
    \nthe tone is ${request.tone}, 
    \nthis posts format ${request.format}, 
    \nthis posts has length ${request.length}, the publish is ${request.where}.`
  }

  // Category 2 is Translate
  if (request.category === 2) {
    return `I want you to act as an ${request.lang} translator, spelling corrector and improver. 
      I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in ${request.lang}.
      I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level ${request.length} words and sentences.
      Keep the meaning same, but make them more literary.
      I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "${request.text}."`
  }

  // Category 5 is Wikipedia
  if (request.category === 5) {
    return `I want you to act as a Wikipedia page. 
    I will give you the name of a topic, and you will provide a summary of that topic in the format of a Wikipedia page. 
    Your summary should be informative and factual, covering the most important aspects of the topic. 
    Start your summary with an introductory paragraph that gives an overview of the topic. My first topic is "${request.text}."`
  }

  if (request.category === 6) {
    return `I want you to translate the sentences I wrote into emojis. 
    I will write the sentence, and you will express it with emojis. I just want you to express it with emojis. 
    I don't want you to reply with anything but emoji. When I need to tell you something in ${request.lang}}, 
    I will do it by wrapping it in curly brackets like {like this}. My first sentence is "${request.text}"`
  }
}

import type { RequestSubmitGPT } from '~/server/types'

export function detectContent(request: Partial<RequestSubmitGPT>) {
  // Category 5 is Wikipedia
  if (request.category === 5)
    return `I want you to act as a Wikipedia page. I will give you the name of a topic, and you will provide a summary of that topic in the format of a Wikipedia page. Your summary should be informative and factual, covering the most important aspects of the topic. Start your summary with an introductory paragraph that gives an overview of the topic. My first topic is "${request.text}."`
}

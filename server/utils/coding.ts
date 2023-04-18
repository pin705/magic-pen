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

    case 'explain':
      return `You are a [you have to manually detect the programming language from the text I enter] expert, 
      please explain the following code to me. [${request.text}]
      and please correct the above error code if any`

    case 'refactor_code':
      return `You are a Clean Code expert, 
      I have the following code, please refactor it in a more clean and concise way so that my colleagues can maintain the code more easily. 
      Also, explain why you want to refactor the code so that I can add the explanation to the Pull Request. [${request.text}`
  }
}

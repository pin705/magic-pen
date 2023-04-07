import { OpenAI } from 'openai-streams/node'
import type { RequestSubmitGPT } from '~/server/types'
import { detectContent } from '~/server/utils/detect-content'

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<RequestSubmitGPT>>(event)
  const content = detectContent(body) as string
  console.log('content', content)

  const stream = await OpenAI(
    'chat',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content },
      ],
      stream: true,
    },
    {
      apiKey: process.env.OPEN_AI_API_KEY,
    },
  )

  return sendStream(event, stream)
})

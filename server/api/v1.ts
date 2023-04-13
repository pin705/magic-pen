import { OpenAI } from 'openai-streams/node'
import type { RequestSubmitGPT } from '~/server/types'
import { prompts } from '~/server/utils/prompt'
import { templateSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<RequestSubmitGPT>>(event)
  const content = prompts(body)
  if (body.templateId) {
    await templateSchema.findOneAndUpdate({ id: body.templateId }, {
      $inc: {
        use_count: 1,
      },
    })
  }

  const stream = await OpenAI(
    'chat',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: content ?? '' },
      ],
      stream: true,
    },
    {
      apiKey: process.env.OPEN_AI_API_KEY,
    },
  )

  return sendStream(event, stream)
})

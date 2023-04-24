import { OpenAI } from 'openai-streams/node'
import type { RequestSubmitGPT } from '~/server/types'
import { prompts } from '~/server/utils/prompt'
import { licenseSchema, templateSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  setResponseHeaders(event, {
    'content-type': 'application/octet-stream',
    'Cache-Control': 'no-cache',
    'X-Accel-Buffering': 'no',
  })

  const body = await readBody<Partial<RequestSubmitGPT>>(event)
  const content = prompts(body)
  if (body.templateId) {
    await templateSchema.findOneAndUpdate({ id: body.templateId }, {
      $inc: {
        use_count: 1,
      },
    })
  }

  const licenseKeys = body.licenseKeys ?? []
  if (licenseKeys.length > 0) {
    const key = licenseKeys[0].replace('LICENSE-', '')
    await licenseSchema.updateMany({
      key,
    }, {
      $inc: {
        activationUsage: -1,
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
      apiKey: config.OPEN_API_KEY,
    },
  )

  return sendStream(event, stream)
})

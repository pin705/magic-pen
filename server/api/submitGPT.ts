import { OpenAI } from 'openai-streams/node'

export default defineEventHandler(async (event) => {
  const decoder = new TextDecoder('utf-8')
  const content = 'Write an engaging article based on your topic role  "writer" tone "neutral" length "short" format "text" lang "English" where "anywhere" with content "Example: Introduction History of Artificial Intelligence. Benefits of Artificial Intelligence. Challenges of Artificial Intelligence. Future of Artificial Intelligence"'

  console.log('received request!')
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

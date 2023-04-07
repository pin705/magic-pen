import { OpenAI } from 'openai-streams/node'

interface RequestBody {
  category: number
  templateId: number
  where: string
  role: string
  tone: string
  length: string
  format: string
  lang: string
  targetLang: string
  text: string
  explain: boolean
  codeTask: string
  wantWrite: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<RequestBody>>(event)
  let content = 'I want to'
  if (body.wantWrite)
    content += ` ${body.wantWrite}`
  if (body.role)
    content += ` with role ${body.role}`

  if (body.text)
    content += ` tell about \n ${body.text} \n`

  content += '\nFollowing criteria'
  if (body.lang)
    content += `\nThe language is ${body.lang}`

  if (body.tone)
    content += `\nThe tone is ${body.tone}`

  if (body.format)
    content += `\nThis posts format ${body.format}`

  if (body.length)
    content += `\nThis posts has length ${body.length}`

  if (body.where)
    content += `\nThe publish is ${body.where}`

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

import { templateSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const templates = await templateSchema
    .find({})
    .select('id title description icon thumb category')
    .limit(query.limit as number)
    .sort({
      description: -1,
    })

  return templates.map((template) => {
    if (!template.description)
      template.description = `Generate ${template.title ? template.title.toLocaleLowerCase() : ''} based on the subject.`

    return template
  })
})

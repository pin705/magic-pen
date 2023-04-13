import { templateSchema } from '~/server/schema'

export default defineEventHandler(async () => {
  const templates = await templateSchema
    .find({})
    .select('id title description icon thumb category')
    .limit(6)
    .sort({
      use_count: -1,
    })

  return templates.map((template) => {
    if (!template.description)
      template.description = `Generate ${template.title ? template.title.toLocaleLowerCase() : ''} based on the subject.`

    return template
  })
})

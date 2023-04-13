import { templateSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const id = event.context?.params?.id
  const template = await templateSchema
    .findOne({ id })
    .select('id title description icon thumb category prompt_user.role prompt_user.placeholder')

  if (!template)
    return null

  if (!template.description)
    template.description = `Generate ${template.title ? template.title.toLocaleLowerCase() : ''} based on the subject.`

  return template
})

import { categorySchema } from '~/server/schema'

export default defineEventHandler(async () => {
  const categorys = await categorySchema.find({}).select('id title description icon thumb')

  return categorys
})

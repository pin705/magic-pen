import { templates } from '@/mock/template/category'

export default defineEventHandler((event) => {
  const params: any = getQuery(event)
  if (params.limit)
    return templates.slice(0, params.limit)

  return templates
})

import type { Template } from '~/types'

export async function useTemplate(id?: string) {
  const route = useRoute()
  const templateId = route?.query?.template ?? 1
  const result = await $fetch<Template>(`/api/template/${id ?? templateId}`)

  return result
}

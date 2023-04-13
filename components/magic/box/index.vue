<script setup lang="ts">
import { category, codingTaskOptions } from '~/constants'

const cate = useCategory()
const codeTask = useCodingOption()
const template = ref(await useTemplate())
const { $listen } = useNuxtApp()

initialize()
function initialize() {
  useRole().value = template.value.prompt_user.role
  usePlaceholder().value = template.value.prompt_user.placeholder
}

$listen('changeTemplate', async (id: string) => {
  template.value = await useTemplate(id)
  useRole().value = template.value.prompt_user.role
})

const wrapTemplate = computed(() => template.value)
const buildPlaceholder = computed(() => {
  if (template)
    return wrapTemplate.value.prompt_user.placeholder

  switch (cate.value) {
    case 1:
      return category.find(item => item.key === cate.value)?.placeholder as string
    case 2:
      return 'Translate something...'
    case 3:
      return 'Grammar something...'
    case 4:
      return codingTaskOptions.find(item => item.value === codeTask.value)?.placeholder as string
    case 5:
      return 'Wikipedia something...'
  }
})

watch(buildPlaceholder, () => {
  usePlaceholder().value = buildPlaceholder.value
})

const conversionComponent: any = computed(() => {
  switch (cate.value) {
    case 1:
      return resolveComponent('ConversionWrite')
    case 2:
      return resolveComponent('ConversionTranslate')
    case 3:
      return resolveComponent('ConversionGrammar')
    case 4:
      return resolveComponent('ConversionCoding')
    // case 5:
    //   return resolveComponent('ConversionWikipedia')
    // case 6:
    //   return resolveComponent('ConversionTeacherAndImprover')
  }
})
</script>

<template>
  <aside class="border-slate-200 p-5 md:w-[385px] md:border-r">
    <form class="space-y-6">
      <MagicCategory />
      <div class="space-y-6">
        <component :is="conversionComponent" :template="wrapTemplate" />
      </div>
      <slot name="action" />
    </form>
  </aside>
</template>

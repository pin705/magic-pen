<script setup lang="ts">
import { category, codingTaskOptions } from '~/constants/scripts'

const cate = useCategory()
const codeTask = useCodingOption()

const placeholder = computed(() => {
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
    case 5:
      return resolveComponent('ConversionWikipedia')
  }
})
</script>

<template>
  <aside class="border-slate-200 p-5 md:w-[385px] md:border-r">
    <form class="space-y-6">
      <MagicCategory />
      <div class="space-y-6">
        <component :is="conversionComponent" :placeholder="placeholder" />
      </div>
      <slot name="action" />
    </form>
  </aside>
</template>

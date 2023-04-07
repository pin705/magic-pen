<script setup lang="ts">
import { category } from '~/constants/scripts'

const cate = useCategory()
const placeholder = computed(() => category.find(item => item.key === cate.value)?.placeholder as string)

const conversionComponent = computed(() => {
  if (cate.value === 1)
    return resolveComponent('ConversionWrite')

  if (cate.value === 2)
    return resolveComponent('ConversionTranslate')

  if (cate.value === 3)
    return resolveComponent('ConversionGrammar')

  if (cate.value === 4)
    return resolveComponent('ConversionCoding')

  return resolveComponent('ConversionWikipedia')
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

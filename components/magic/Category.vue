<script setup lang="ts">
import { category } from '~/constants/scripts'

const cateSelected = useCategory()
</script>

<template>
  <div class="scrollbar-hide">
    <div class="gap-2 text-sm grid grid-cols-3">
      <div v-for="cate in category" :key="cate.key" class="flex items-center justify-center">
        <input
          :id="cate.key"
          v-model="cateSelected"
          type="radio"
          class="peer !hidden"
          :value="cate.key"
        >
        <label
          :for="cate.key"
          class="text-center w-full cursor-pointer  rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          {{ cate.name }}
        </label>
      </div>
    </div>
  </div>
</template>

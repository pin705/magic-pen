<script setup lang="ts">
import { category } from '~/constants/scripts'

const cateSelected = useState('category', () => 1)
</script>

<template>
  <div class="scrollbar-hide overflow-auto">
    <ul class="flex flex-nowrap gap-2 text-sm">
      <li v-for="cate in category" :key="cate.key" class="flex-none">
        <input
          :id="cate.key"
          v-model="cateSelected"
          type="radio"
          class="peer !hidden"
          :value="cate.key"
        > <label
          :for="cate.key"
          class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          <div class="block">{{ cate.name }}</div>
        </label>
      </li>
    </ul>
  </div>
</template>

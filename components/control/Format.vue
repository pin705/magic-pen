<script setup>
import { advanced } from '~/constants/scripts'

const formatSelected = useFormat()
</script>

<template>
  <div>
    <label class="mb-2 block text-sm text-secondary-500">Format</label>
    <div class="scrollbar-hide overflow-auto">
      <ul class="flex flex-nowrap gap-2 text-sm">
        <li v-for="format in advanced.format" :key="format" class="flex-none">
          <input
            :id="format"
            v-model="formatSelected"
            type="radio"
            :value="format"
            class="peer !hidden"
          > <label
            :for="format"
            class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
          >
            <div class="block">{{ format }}</div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

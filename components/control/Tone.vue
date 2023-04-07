<script setup>
import { advanced } from '~/constants/scripts'

const toneSelected = useTone()
</script>

<template>
  <div>
    <label class="mb-2 block text-sm text-secondary-500">Tone</label>
    <div class="scrollbar-hide overflow-auto">
      <ul class="flex flex-nowrap gap-2 text-sm">
        <li v-for="tone in advanced.tone" :key="tone" class="flex-none">
          <input
            :id="tone
            " v-model="toneSelected"
            type="radio"
            :value="tone"
            class="peer !hidden"
          > <label
            :for="tone"
            class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
          >
            <div class="block">{{ tone }}</div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

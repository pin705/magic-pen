<script setup>
import { language } from '~/constants'

const langSelected = useLanguage()
</script>

<template>
  <div>
    <label class="mb-2 block text-sm text-secondary-500">Language</label>
    <div class="mt-2">
      <select
        v-model="langSelected"
        class="block w-full rounded-md border-secondary-300 text-sm shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
      >
        <option v-for="lan in language" :key="lan" :value="lan">
          {{ lan }}
        </option>
      </select>
    </div>
  </div>
</template>

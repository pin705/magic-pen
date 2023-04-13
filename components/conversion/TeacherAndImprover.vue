<script lang="ts" setup>
import { teacherAndImprover } from '~/constants'
import { useState } from '#app'

const contentGeneratedFinish = useState('content-generate-finish', () => false)
const value = useTeacherImprover()
</script>

<template>
  <TextArea v-if="contentGeneratedFinish" :placeholder="usePlaceholder().value" rows="15" />
  <div>
    <label for="task" class="mb-3 block text-sm text-secondary-500">What can I do for you?</label>
    <div class="my-3">
      <select v-model="value" class="block w-full rounded-md border-secondary-300 text-sm shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50">
        <option v-for="code in teacherAndImprover" :key="code.value" :value="code.value">
          {{ code.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <details class="group -my-2" :open="open">
    <summary
      class="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-medium text-secondary-900"
    >
      <label class="block text-sm font-medium text-secondary-700">Advanced</label>
      <div class="text-secondary-500">
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor"
          class="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </summary>
    <div class="space-y-5 py-2 text-sm text-secondary-500">
      <ControlLanguage />
      <ControlPublish />
      <ControlTone />
      <ControlLength />
      <ControlFormat />
    </div>
  </details>
</template>

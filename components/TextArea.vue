<script setup lang="ts">
defineProps<{
  placeholder: string
  rows: number
}>()

const content = useTextContent()
</script>

<template>
  <textarea
    v-model="content"
    :rows="rows"
    :placeholder="placeholder"
    class="block w-full rounded-md border-secondary-300 text-sm shadow-sm placeholder:text-secondary-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
  />
</template>

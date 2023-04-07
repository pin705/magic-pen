<script lang="ts" setup>
defineProps<{
  placeholder: string
}>()
</script>

<template>
  <TextArea :placeholder="placeholder" rows="15" />
</template>

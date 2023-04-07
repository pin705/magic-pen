<script setup>
import { useRole } from '~/composables/useRole'
import { whatRole } from '~/constants/scripts'

const roleSelected = useRole()
</script>

<template>
  <div>
    <label for="role" class="mb-3 block text-sm text-secondary-500">What role do you want to play?</label>
    <div class="my-3">
      <select
        v-model="roleSelected"
        class="block w-full rounded-md border-secondary-300 text-sm capitalize shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
        placeholder="Select"
      >
        <option selected="selected" value="">
          Select
        </option>
        <option v-for="item in whatRole" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

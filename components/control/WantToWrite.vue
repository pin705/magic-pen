<script setup lang="ts">
import type { Template } from '~/types'

const { template } = defineProps<{
  template: Template
}>()
const { $event } = useNuxtApp()
const { data: wantToWrite } = await useFetch('/api/category')
const target = ref(null)
const showListWantToWrite = ref(false)
const wantWrite = useWantWrite()
const input = ref('')

if (template)
  wantWrite.value = template

else
  wantWrite.value = wantToWrite.value[0]

const title = computed(() => {
  return wantWrite.value?.title
})

const hoverWantToWrite = ref('')
async function onWaitWriteSelected(value) {
  setShowListWantToWrite(false)
  wantWrite.value = value
  $event('changeTemplate', value.id)
}

function setShowListWantToWrite(value) {
  showListWantToWrite.value = value
}

const wantToWriteCollect = computed(() => {
  if (input.value === '')
    return wantToWrite.value

  return wantToWrite.value.filter(item => item.title.toLowerCase().includes(input.value.toLowerCase()))
})

watch(input, () => {
  if (input.value === '')
    return

  wantWrite.value = wantToWrite.value.find(item => item.title.toLowerCase().includes(input.value.toLowerCase()))
})

onClickOutside(target, () => {
  setShowListWantToWrite(false)
})
</script>

<template>
  <div>
    <label for="type" class="mb-3 block text-sm text-secondary-500">What do you want to write?</label>
    <div class="my-2">
      <div tabindex="-1" role="combobox" aria-owns="listbox-null" class="multiselect">
        <div class="multiselect__select" />
        <div class="multiselect__tags" @click.stop="setShowListWantToWrite(true)">
          <input
            v-show="showListWantToWrite"
            v-model="input"
            :onfocus="true"
            type="text"
            autocomplete="off"
            placeholder="Type to search"
            class="multiselect__input"
            :style="{
              'width: 100%': showListWantToWrite,
              'width: 0; position: absolute; padding: 0;': !showListWantToWrite,
            }"
          >
          <span
            v-show="!showListWantToWrite"
            class="multiselect__single"
          >
            {{ title }}
          </span>
        </div>
        <div v-show="showListWantToWrite" ref="target" tabindex="-1" class="multiselect__content-wrapper max-h-[218px]">
          <ul role="listbox" class="multiselect__content inline-block">
            <li
              v-for="item in wantToWriteCollect"
              :key="item"
              :class="{ 'multiselect__option--selected': wantWrite.title === item.title }"
              class="multiselect__element cursor-pointer"
              @mousemove="hoverWantToWrite = item.title"
              @click.stop="onWaitWriteSelected(item)"
            >
              <span class="multiselect__option transition transition-colors duration-200" :class="{ 'multiselect__option--highlight': hoverWantToWrite === item.title }"><span>
                {{ item.title }}
              </span>
              </span>
            </li>
            <li class="hidden">
              <span class="multiselect__option cursor-pointer">
                <span>Oops! No elements found. Consider
                  changing the search query.
                </span></span>
            </li>
            <li class="hidden">
              <span class="multiselect__option">List is empty.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

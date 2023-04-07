<script setup>
import { wantToWrite } from '~/constants/scripts'

const target = ref(null)
const showListWantToWrite = ref(false)
const wantWrite = useState('want-write', () => wantToWrite[0])
const hoverWantToWrite = ref('')
function onWaitWriteSelected(value) {
  showListWantToWrite.value = false
  wantWrite.value = value
}

onClickOutside(target, () => {
  showListWantToWrite.value = false
})
</script>

<template>
  <div>
    <label for="type" class="mb-3 block text-sm text-secondary-500">What do you want to write?</label>
    <div class="my-2">
      <div tabindex="-1" role="combobox" aria-owns="listbox-null" class="multiselect" @click="showListWantToWrite = true">
        <div class="multiselect__select" />
        <div class="multiselect__tags">
          <input
            v-show="showListWantToWrite"
            autofocus
            type="text"
            autocomplete="off"
            spellcheck="false"
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
            {{ wantWrite }}
          </span>
        </div>
        <div v-show="showListWantToWrite" ref="target" tabindex="-1" class="multiselect__content-wrapper max-h-[218px]">
          <ul role="listbox" class="multiselect__content inline-block">
            <li
              v-for="item in wantToWrite"
              :key="item"
              :class="{ 'multiselect__option--selected': wantWrite === item }"
              class="multiselect__element cursor-pointer"
              @mousemove="hoverWantToWrite = item"
              @click="onWaitWriteSelected(item)"
            >
              <span class="multiselect__option transition transition-colors duration-200" :class="{ 'multiselect__option--highlight': hoverWantToWrite === item }"><span>
                {{ item }}
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

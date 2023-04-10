<script setup lang="ts">
defineProps<{
  placeholder: string
}>()
const content = useTextContent()
</script>

<template>
  <ControlWantToWrite />
  <ControlWantToPlay />
  <div>
    <label for="label5" class="mb-3 block text-sm text-secondary-500">Tell about your subject</label>
    <div class="my-3">
      <div class="relative">
        <button
          type="button"
          class="group z-10 absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md bg-white/70 text-secondary-500 transition-all hover:border hover:border-secondary-100 hover:bg-white hover:text-primary-600 hover:shadow-sm"
        >
          <span
            class="invisible absolute -top-6 min-w-[40px] rounded-md bg-black bg-opacity-70 px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-7 group-hover:opacity-100"
          >Example</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
            <path
              d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
            />
          </svg>
        </button>
        <div
          class="enhanceai-wrapper"
          style="position: relative; width: 100%; margin-right: calc(0%); margin-top: 0; text-align: left; box-sizing: border-box; display: block;"
        >
          <textarea
            v-model="content"
            rows="7" :placeholder="placeholder"
            data-aicontext="Help continue writing the topic"
            class="block w-full rounded-md border-secondary-300 text-sm shadow-sm placeholder:text-secondary-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
          />
        </div>
      </div>
    </div>
  </div>
  <MagicAdvanced />
</template>

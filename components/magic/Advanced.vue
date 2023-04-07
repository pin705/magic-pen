<script setup lang="ts">
const open = ref(false)
const language = ['Automatic', 'Việt nam', 'English', 'French', 'Spanish', 'Simplified Chinese', 'Traditional Chinese', 'Japanese', 'German', 'Russian', 'Arabic', 'Hindi', 'Portuguese', 'Italian', 'Korea', 'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish', 'Turkish', 'Indonesian', 'Malay']
const options = {
  publish: ['Anywhere', 'Work', 'Email', 'Social Media'],
  tone: ['Neutral', 'Formal', 'Friendly', 'Casual'],
  format: ['Text', 'HTML', 'Markdown'],
  length: ['Short', 'Medium', 'Long'],
}

const langSelected = useState('language', () => language[0])
const publishSelected = useState('publish', () => options.publish[0])
const toneSelected = useState('tone', () => options.tone[0])
const formatSelected = useState('format', () => options.format[0])
const lengthSelected = useState('length', () => options.length[0])
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
      <div>
        <label class="mb-2 block text-sm text-secondary-500">Publish</label>
        <div class="scrollbar-hide overflow-auto">
          <ul class="flex flex-nowrap gap-2 text-sm">
            <li v-for="where in options.publish" :key="where" class="flex-none">
              <input
                :id="where"
                v-model="publishSelected"
                type="radio"
                :value="where"
                class="peer !hidden"
              >
              <label
                :for="where"
                class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
              >
                <div class="block">{{ where }}</div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <label class="mb-2 block text-sm text-secondary-500">Tone</label>
        <div class="scrollbar-hide overflow-auto">
          <ul class="flex flex-nowrap gap-2 text-sm">
            <li v-for="tone in options.tone" :key="tone" class="flex-none">
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
      <div>
        <label class="mb-2 block text-sm text-secondary-500">Length</label>
        <div class="scrollbar-hide overflow-auto">
          <ul class="flex flex-nowrap gap-2 text-sm">
            <li v-for="length in options.length" :key="length" class="flex-none">
              <input
                :id="length"
                v-model="lengthSelected"
                type="radio"
                :value="length"
                class="peer !hidden"
              > <label
                :for="length"
                class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
              >
                <div class="block">{{ length }}</div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <label class="mb-2 block text-sm text-secondary-500">Format</label>
        <div class="scrollbar-hide overflow-auto">
          <ul class="flex flex-nowrap gap-2 text-sm">
            <li v-for="format in options.format" :key="format" class="flex-none">
              <input
                :id="format"
                v-model="formatSelected"
                type="radio"
                :value="format"
                class="peer !hidden"
              > <label
                :for="format"
                class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
              >
                <div class="block">{{ format }}</div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </details>
</template>

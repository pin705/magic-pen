<script setup lang="ts">
const generateText = ref('')
const loaded = ref(true)

function prettierTextFn() {
  if (!generateText.value)
    return ''

  const texts = generateText.value.split('\n\n').map((item, index) => {
    return `<p key="${index}">${item}</p>`
  })

  if (texts.length <= 0)
    return ''

  return `<div>${texts}</div>`
}

watch(generateText, () => {
  console.log('prettierTextFn()', prettierTextFn())
})

async function onGenerate() {
  const completion = await fetch('/api/submitGPT', {
    method: 'POST',
  })

  if (!completion.body)
    return
  const data = completion.body

  const reader = data.getReader()
  const decoder = new TextDecoder()
  let done = false

  while (!done) {
    const { value, done: doneReading } = await reader.read()
    done = doneReading
    const chunkValue = decoder.decode(value)
    generateText.value += chunkValue
  }

  loaded.value = false
}
</script>

<template>
  <PageHeader />
  <div class="relative mx-auto mb-16 max-w-6xl md:mb-40">
    <span id="magickBox" class="absolute -top-6 left-0" />
    <div class="rounded-xl border border-slate-200 bg-white shadow md:flex">
      <MagicBox @generate="onGenerate" />
      <div class="mt-5 flex-1 border-t border-t-slate-100 px-5 py-5 md:mt-0 md:min-h-[640px] md:border-0 md:py-10">
        <div class="mx-auto max-w-xl">
          <div class="relative pb-12">
            <div class="md:max-h-[calc(100vh-120px)] md:overflow-scroll">
              <div class="prose">
                <div class="md-body">
                  <div class="markdown-body">
                    <ol>
                      <li v-for="(text, i) in generateText.split('\n\n')" :key="i">
                        <p>{{ text }}</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!loaded" class="absolute inset-x-0 bottom-0 flex justify-center gap-4">
              <button
                type="button"
                class="relative flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-secondary-300 bg-white px-3 py-1.5 text-center text-sm font-medium text-secondary-700 shadow-sm transition-all hover:bg-secondary-50 focus:ring focus:ring-secondary-100 md:flex-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="h-4 w-4 text-secondary-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z"
                  />
                </svg>
                Copy
              </button>
              <a
                target="_blank"
                href="https://twitter.com/intent/tweet?text=MagickPen%20-%20Write%20Anything%20in%20seconds%20just%20like%20Magick&amp;hashtags=chatgpt&amp;url=https%3A%2F%2Fmagickpen.com&amp;"
                class="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-secondary-300 bg-white px-3 py-1.5 text-center text-sm font-medium text-secondary-700 shadow-sm transition-all hover:bg-secondary-50 focus:ring focus:ring-secondary-100 md:flex-none"
              ><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="h-4 w-4 text-secondary-400"
              >
                <path
                  d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z"
                />
              </svg>
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TemplateCategory />
  </div>
</template>

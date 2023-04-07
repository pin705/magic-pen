<script setup lang="ts">
const generateText = ref('')
const loaded = ref(false)

const langSelected = useState('language')
const publishSelected = useState('publish')
const toneSelected = useState('tone')
const formatSelected = useState('format')
const lengthSelected = useState('length')
const roleSelected = useState('role')
const cateSelected = useState('category')
const content = useState('content')
const wantWrite = useState('want-write')

async function onGenerate() {
  loaded.value = true
  generateText.value = ''
  const payload = {
    // category: 1,
    // templateId: 4,
    where: publishSelected.value,
    role: roleSelected.value,
    tone: toneSelected.value,
    length: lengthSelected.value,
    format: formatSelected.value,
    lang: langSelected.value,
    targetLang: langSelected.value,
    text: content.value,
    category: cateSelected.value,
    wantWrite: wantWrite.value,
    // explain: false,
    // codeTask: 'fix',
  }

  const completion = await fetch('/api/submitGPT', {
    method: 'POST',
    body: JSON.stringify(payload),
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
    <span class="absolute -top-6 left-0" />
    <div class="rounded-xl border border-slate-200 bg-white shadow md:flex">
      <MagicBox @generate="onGenerate">
        <template #action>
          <div class="flex items-center gap-4">
            <button
              type="button"
              class="flex-1 rounded-lg border border-primary-500 bg-primary-500 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-500 disabled:bg-primary-500 disabled:opacity-80"
              @click="onGenerate"
            >
              <div v-if="loaded" class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="mx-auto h-5 w-5 animate-spin text-white"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" /> <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75" /></svg>
              </div>
              <div v-else>
                Generate
              </div>
            </button>
            <a
              href="https://magickpen.lemonsqueezy.com/checkout/buy/b00f9189-7054-42a7-84e9-510f38fe5a31"
              class="rounded-lg border border-primary-500 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-primary-500 shadow-sm transition-all hover:border-primary-700 hover:bg-primary-50 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              Buy Credits
            </a>
          </div>
          <div class="flex items-center justify-between gap-2 text-sm text-secondary-500">
            <div class="flex items-center justify-between gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="1em"
                height="1em" viewBox="0 0 256 256"
              >
                <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
                <path
                  fill="currentColor" d="M232 104c0 24-40 48-104 48S24 128 24 104s40-48 104-48s104 24 104 48Z"
                  opacity=".2"
                />
                <path
                  fill="currentColor"
                  d="M207.6 63.8C186.8 53.5 159.3 48 128 48s-58.8 5.5-79.6 15.8S16 88.8 16 104v48c0 15.2 11.8 29.9 32.4 40.2S96.7 208 128 208s58.8-5.5 79.6-15.8s32.4-25 32.4-40.2v-48c0-15.2-11.8-29.9-32.4-40.2ZM128 64c62.6 0 96 23.2 96 40c0 9.9-11.7 22.2-34.4 30.5h-.3c-15.5 5.6-36 9.4-61.3 9.4s-45.8-3.8-61.3-9.4h-.3C43.7 126.2 32 113.9 32 104c0-16.8 33.4-40 96-40Zm-8 95.9v32c-19-.7-35-3.5-48-7.5V153c14.3 4 30.5 6.3 48 6.9Zm16 0c17.5-.6 33.7-2.9 48-6.9v31.4c-13 4-29 6.8-48 7.5ZM32 152v-18.5a84.5 84.5 0 0 0 16.4 10.7l7.6 3.4V178c-15.8-7.8-24-17.7-24-26Zm168 26v-30.4l7.6-3.4a84.5 84.5 0 0 0 16.4-10.7V152c0 8.3-8.2 18.2-24 26Z"
                />
              </svg> <span>1 credits left!</span>
            </div>
            <div>
              <div class="flex justify-center">
                <a class="cursor-pointer hover:text-primary-500 hover:underline">Apply
                  Credits</a>
              </div>
            </div>
          </div>
        </template>
      </MagicBox>
      <div class="mt-5 flex-1 border-t border-t-slate-100 px-5 py-5 md:mt-0 md:min-h-[640px] md:border-0 md:py-10">
        <div class="mx-auto max-w-xl">
          <article v-if="!generateText">
            <div>
              <div class="my-10 text-center text-base text-secondary-400 md:mt-36">
                <!--                <NuxtImg src="/images/typewriter.png" alt="" class="mx-auto w-80 pb-10" /> -->
                Don’t wait, just do it.
              </div>
            </div>
          </article>
          <div v-else class="relative pb-12">
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
            <ContentCommand v-if="!loaded" />
          </div>
        </div>
      </div>
    </div>
    <TemplateCategory />
  </div>
</template>

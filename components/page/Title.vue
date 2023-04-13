<script setup lang="ts">
const words = [
  'emails',
  'blogs',
  'Facebook ads',
  'taglines & headlines',
  'Tiktok ads',
  'YouTube descriptions',
  'interview questions',
  'profile bio',
  'story plots',
]

let part = null
let i = 0
let offset = 0
const len = words.length
let forwards = true
let skip_count = 0
const skip_delay = 15
const speed = 100
const timer = ref(null)

onMounted(() => {
  timer.value = setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count
        if (skip_count === skip_delay) {
          forwards = false
          skip_count = 0
        }
      }
    }
    else {
      if (offset === 0) {
        forwards = true
        i++
        offset = 0
        if (i >= len)
          i = 0
      }
    }

    part = words[i].substr(0, offset)
    if (skip_count === 0) {
      if (forwards)
        offset++

      else
        offset--
    }

    document.querySelector('.word').textContent = part
  }, speed)
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<template>
  <div class="mx-auto my-14 md:my-28 xl:my-32 flex items-center justify-center flex-col">
    <div class="gradients">
      <div class="circle orange" />
      <div class="circle purple" />
      <div class="circle yellow" />
    </div>
    <h1 class="mx-auto bg-clip-text pt-2 text-4xl font-bold !leading-[1.1] tracking-[-0.02em] md:text-center md:text-4xl xl:text-5xl 2xl:text-6xl">
      <div class="hidden md:block">
        <div>
          A better, write anything in Seconds
        </div>
      </div>
      <div class="block md:hidden">
        Write Anything <br>
        in Seconds
      </div>
      <div class="word text-primary-400 min-h-[52px]" />
    </h1>
    <p class="mt-4 text-left text-lg text-secondary-400 md:text-center flex-none max-w-[42rem]">
      Dytr is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!
    </p>
    <a href="/#master-box" aria-current="page" class="flex items-center justify-center gap-1 mt-6 rounded-full md:min-w-[110px] border border-primary-500 bg-primary-500 px-3 py-1.5 md:px-5 md:py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all hover:border-primary-600 hover:bg-primary-600 focus:ring focus:ring-primary-200 nuxt-link-exact-active nuxt-link-active">
      Start Dytr
      <svg viewBox="0 0 24 24" fill="#fff" width="1rem" height="1rem"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
    </a>
  </div>
</template>

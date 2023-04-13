<script setup lang="ts">
const features = [
  {
    title: 'Powered by AI',
    description: 'Unleash the power of GPT-3.5 and write anything in just seconds like magick',
    new: false,
    icon: '/img/icon/icon01.png',
  },
  {
    title: 'Easy to use',
    description: 'Writing has never been easier, and you can do it with a few clicks',
    new: false,
    icon: '/img/icon/icon02.png',
  },
  {
    title: 'Infinite',
    description: 'You can write as much as you want, and you can write as much as you want',
    new: false,
    icon: '/img/icon/icon03.png',
  },
  {
    title: 'Free trial',
    description: 'No credit card, pay as you go',
    new: false,
    icon: '/img/icon/icon04.png',
  },
  {
    title: 'Template',
    description: 'Endless ways to use it',
    new: true,
    icon: '/img/icon/icon05.png',
  },
  {
    title: 'Language support',
    description: 'Automatically detect language',
    new: false,
    icon: '/img/icon/icon06.png',
  },
]
</script>

<template>
  <div id="features" class="mx-auto my-24 max-w-6xl md:my-40">
    <p class="text-base text-center font-semibold leading-7 text-primary-500">
      Features
    </p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul class="mt-16 grid grid-cols-1 gap-6 text-slate-700 md:grid-cols-3">
      <li v-for="fea in features" :key="fea.title" class="rounded-xl bg-white p-6 shadow-sm">
        <a>
          <NuxtImg :src="fea.icon" alt="" class="h-10 w-10" />
          <h3 class="mt-4 font-display text-lg font-medium">
            {{ fea.title }}
            <small v-if="fea.new" class="rounded bg-primary-500 px-1 py-0.5 text-xs font-medium text-white">NEW</small>
          </h3>
          <p class="mt-1.5 text-sm text-secondary-500">
            {{ fea.description }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

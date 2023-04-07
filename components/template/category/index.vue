<script setup lang="ts">
const { data: templates } = useFetch('/api/template/category?limit=12')
</script>

<template>
  <div class="mx-auto my-24 max-w-6xl md:my-40">
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Unleash your writing potential
    </h2>
    <div class="relative">
      <div class="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 min-h-[440px] tempale-list-index">
        <a v-for="tem in templates" :key="tem.id" href="/?template=1" class="group block h-full overflow-hidden rounded-xl border border-secondary-100 bg-white py-5 px-6 transition-all duration-300 nuxt-link-active" title="Article Writing">
          <div class="flex items-center gap-2">
            <div class="flex-none overflow-hidden rounded-lg border border-secondary-100 bg-white p-1">
              <!--              <NuxtImg src="/images/icon57.png" class="h-6 w-6" /> -->
            </div>
            <h4 class="line-clamp-2 font-medium capitalize text-secondary-700 group-hover:text-primary-500">
              {{ tem.title }}
            </h4>
          </div>
          <p class="line-clamp-2 mt-4 text-sm text-slate-400">
            {{ tem.description }}
          </p>
        </a>
      </div>
    </div>
  </div>
  <div class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-50 pt-40 pb-3 pointer-events-none absolute">
    <a href="/templates" class="relative border border-primary-500 bg-primary-500 py-3 text-sm text-white font-semibold px-6 rounded-lg transition hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 flex items-center pointer-events-auto">
      Browse All Templates
    </a>
  </div>
</template>

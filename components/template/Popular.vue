<script setup lang="ts">
const { data: templates } = await useFetch('/api/template/popular')
function goToTemplate(id) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return navigateTo(`/templates?id=${id}`)
}
</script>

<template>
  <section class="mt-12">
    <h2 class="line-clamp-2 font-medium text-lg capitalize text-secondary-700">
      Popular Templates
    </h2>
    <div class="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 tempale-list-index">
      <div
        v-for="tem in templates"
        :key="tem.id"
        class="cursor-pointer group block h-full overflow-hidden rounded-xl border border-secondary-100 bg-white py-5 px-6 transition-all duration-300"
        :title="tem.title"
        @click="goToTemplate(tem.id)"
      >
        <div class="flex items-center gap-2">
          <div class="flex-none overflow-hidden rounded-lg border border-secondary-100 bg-white p-1">
            <NuxtImg format="webp" :src="tem.icon" class="h-6 w-6" />
          </div>
          <h4 class="line-clamp-2 font-medium capitalize text-secondary-700 group-hover:text-primary-500">
            {{ tem.title }}
          </h4>
        </div>
        <p class="line-clamp-2 mt-4 text-sm text-slate-400">
          {{ tem.description }}
        </p>
      </div>
    </div>
  </section>
</template>

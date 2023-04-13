<script setup>
</script>

<template>
  <Body class="bg-slate-50 antialiased [font-feature-settings:'ss01']">
    <div class="absolute inset-x-0 top-0 z-0 h-[400px] bg-gradient-to-b from-pink-200 to-slate-50" />
    <div class="absolute inset-x-0 top-0 z-0 h-[400px] overflow-hidden opacity-10">
      <section class="grid-bg" />
    </div>
    <div class="relative mx-auto max-w-[1280px] px-5">
      <PageHeader />
      <div class="relative">
        <slot />
      </div>
    </div>
  </Body>
</template>

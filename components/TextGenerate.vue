<script setup lang="ts">
defineProps<{
  loaded: boolean
  generateText: unknown
  isMarkdownContent: boolean
}>()
</script>

<template>
  <article v-show="!generateText">
    <div v-if="loaded" class="animate-pulse">
      <div class="text-center">
        <div class="lf-w-full lf-relative vue-lottie-player" style="width: 100%; height: 300px;">
          <div style="all: inherit;">
            <ClientOnly>
              <Vue3Lottie
                autoplay="true"
                animation-link="/pen.json"
                :speed="1"
                mode="normal"
                loop=""
                style="height: 100%;
              background: transparent;"
                background="transparent"
              />
            </ClientOnly>
          </div>
        </div> <div class="text-secondary-400">
          Magic is being cast, Please wait ...
        </div>
      </div>
    </div>
    <div v-else>
      <div class="my-10 text-center text-base text-secondary-400 md:mt-36">
        <NuxtImg src="/images/typewriter.png" alt="" class="mx-auto w-80 pb-10" />
        Don’t wait, just do it.
      </div>
    </div>
  </article>
  <div v-show="generateText" class="relative pb-12">
    <div id="messages" class="md:max-h-[calc(100vh-120px)] md:overflow-scroll">
      <div class="prose">
        <div class="md-body">
          <div class="markdown-body">
            <ol>
              <template v-if="isMarkdownContent">
                <Markdown v-for="(text, i) in generateText.split('\n\n')" :key="i" :source="text" />
              </template>
              <template v-else>
                <li v-for="(text, i) in generateText.split('\n\n')" :key="i">
                  <p>{{ text }}</p>
                </li>
              </template>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <ControlCommand v-if="!loaded" />
  </div>
</template>

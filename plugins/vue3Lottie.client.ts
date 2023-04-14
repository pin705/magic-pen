import Vue3Lottie from 'vue3-lottie'

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  nuxtApp.vueApp.use(Vue3Lottie)
})

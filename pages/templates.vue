<script setup lang="ts">
definePageMeta({
  layout: 'template',
})

const route = useRoute()
const isDetail = ref(false)
const templateDetail = ref({})
const { data: templates } = await useFetch('/api/template', {
  params: {
    limit: 100,
  },
})

watchEffect(() => {
  const id = route.query.id
  isDetail.value = !!id
  templateDetail.value = templates.value.find((template: any) => template.id === parseInt(id as string))
})

const categoryTemplate = [
  'copywriter',
  'education',
  'life',
  'business',
  'creative',
  'email',
  'marketing',
  'other',
]

function templateByCategory(cate: string) {
  if (templates.value.length > 0)
    return templates.value.filter((template: any) => template.category === cate)

  return []
}
</script>

<template>
  <main class="min-h-[calc(100vh-180px)] items-center">
    <div class="md:my-38 mx-auto my-24">
      <div class="w-full md:flex justify-between">
        <aside class="md:w-56">
          <div class="scrollbar-hide top-6 overflow-auto md:sticky">
            <ul class="flex flex-nowrap gap-3 leading-loose md:block">
              <li v-for="cate in categoryTemplate" :key="cate" class="flex-none">
                <a :href="`/templates#${cate}`" class="text-secondary-500 hover:text-primary-700 capitalize">{{ cate }}</a>
              </li>
            </ul>
          </div>
        </aside>
        <section v-if="!isDetail" class="mt-5 flex-1 space-y-6 md:mt-0 md:pl-10">
          <div v-for="cate in categoryTemplate" :id="cate" :key="cate">
            <h3 class="font-medium capitalize text-secondary-700">
              {{ cate }}
            </h3>
            <div class="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <NuxtLink
                v-for="tem in templateByCategory(cate)"
                :key="tem.id"
                :to="`/templates?id=${tem.id}`"
                class="group block h-full overflow-hidden rounded-xl border border-secondary-100 bg-white py-5 px-6 transition-all duration-300 hover:shadow-sm"
                :title="tem.title"
              >
                <div class="flex items-center gap-2">
                  <div class="flex-none overflow-hidden rounded-lg border border-secondary-100 bg-white p-1">
                    <NuxtImg
                      :src="tem.icon"
                      format="webp"
                      class="h-6 w-6"
                    />
                  </div>
                  <h4 class="line-clamp-2 font-medium capitalize text-secondary-700 group-hover:text-primary-500">
                    {{ tem.title }}
                  </h4>
                </div>
                <p class="line-clamp-2 mt-4 text-sm text-slate-400">
                  {{ tem.description }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </section>
        <section v-else class="mt-5 flex-1 md:mt-0 max-w-[900px]">
          <section class="md:flex text-center md:text-left items-center justify-between">
            <div class="md:flex items-center gap-4 flex-1 md:pr-10">
              <div class="flex-none inline-block mx-auto md:m-0 overflow-hidden rounded-lg border border-primary-200/50 p-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUdwTGvG7ZXW9idAaChCYPX1+2Cz6Rg3ajuH2dPW3i9FaO7w9ufp7/f4/ODi6dvd5EjN/DVvvCNXqGBeY62npkOs7YOo2qjR8IHT9ysOIKcAAAALdFJOUwBoP9kyU67+/f2Lwd4r1QAAAxhJREFUWMPtmG1X8yAMhtXNrl0Cfdnm/P+/9IEQQkhhznP89JwFnaulV2/ukHT69vaKV/xhfLbjI5//6EyoIB/DAK4TgNPn51SfBhU4DO+ZMyxLl0NXqYN4HF7jLzNqWRYGhXfuGRDId6LEFwT4XpYhLexZkKBAC4Kv25MgrNYNoiihMIBuv1UEeVRx24GSYp7KswsIUIenQFI0GlCYWU2mgwIKF/Plfo4jBpJHFqQBQhQQRBWKxKAwNOi771BZWtmD/APTm+dADuqsGa+jdAG9/wBSWQNnMtZUVN0Ikk1QQMFrk7OYNfJorBVhK6gMktm1z42s/QRC0KBAyrApgnCvyFrq8n5EmzW11WhDjr83uw5aGT4FirJoV6piVflHbC1NNGvtDCKP6oxFqzpZ88boUBFItyU5kjFO2xSGj/cMoFGDQC4nQhoMcgLKyZ+IRLe2oMaezUZwyTX3B+xBvaQlRebZkeqMa02DQPVkcFUnJI/AQd0dpYr2iprCaUHSIH1pbuRYDRrYbLFYRcka6hoLPlPszL5zWvLl5S3E/QO0jTQmDQNKisDtrJSlkTdld6G0b7u02z0bLF/FWcI5aYjqhcla0V2e6iU/qtZTfTkscnUZVYqgud/iBZD7JK9Kp2JugbLZM1dC8jaajZ5uk22WlIWYW4pQCGXEqvTJI5QCUzE/uTRuKT5546tVpUYQl1tAt7S0XslGkNOPRRMGBPJRxT4APaoDlfa8qWqQa2aNFHgv0qoCyiSrCGcbfHfPWZtM+M7SWiAoIM/lVYF8U5HKSEp+2o0RhOY+RMxr+1oNqJExpaiRMO469wqkeqeMvDKv2uGe5a0iZlWfpDJIjsCoIbONIiwtvWoVwTAwu0eegLQLrk2PMPd1+SQZQbVF0tpSO9CKvqbyYMh7OMugJ3NPUaBNawGN6+XaiekaSh5xvnbjsgXQkRWtp0s/aPbl2jt90qBx3U7doNnd2CKngMZ13TrB87vnI2cl0HmLnG5sxFgfxXZIf/idT4+CQA9nnA7H/MfosR/nwyHMPJwfTDm+/rXwiv83/gG09LCSU0s92gAAAABJRU5ErkJggg==" class="h-10 w-10">
              </div>
              <div>
                <h1 class="line-clamp-2 font-medium text-xl capitalize text-secondary-700">
                  {{ templateDetail.title }}
                </h1>
                <p class="line-clamp-2 text-sm text-slate-500">
                  {{ templateDetail.description }}
                </p>
              </div>
            </div>
            <NuxtLink :to="`/?template=${templateDetail.id}`" class="mx-auto inline-block mt-5 rounded-lg px-5 border border-primary-500 bg-primary-100 py-2.5 text-center text-sm font-medium text-primary-500 shadow-sm transition-colors duration-300 hover:border-primary-700 hover:bg-primary-700 hover:text-white focus:ring focus:ring-primary-200">
              Use Template
            </NuxtLink>
          </section>
          <section class="mt-8">
            <NuxtLink :to="`/?template=${templateDetail.id}`">
              <NuxtImg src="/img/1.png" alt="" class="w-full h-auto rounded-xl" />
            </NuxtLink>
          </section>
          <TemplatePopular />
        </section>
      </div>
    </div>
  </main>
</template>

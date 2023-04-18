<script setup lang="ts">
const proPlan = ref({
  credits: '100',
  price: 5,
})

const subscribePlan = ref({
  credits: '3000',
  price: 29,
})

function isPro(pricingName: string) {
  return pricingName === 'pro'
}

function isFree(pricingName: string) {
  return pricingName === 'free'
}

function isSubscribe(pricingName: string) {
  return pricingName === 'subscribe'
}

function setPlan(v, pricingName: string) {
  if (isSubscribe(pricingName))
    subscribePlan.value = v
  else if (isPro(pricingName))
    proPlan.value = v
}

const pricings = [
  {
    name: 'free',
    price: 0,
    class: 'rounded-xl bg-white p-6 md:p-8 shadow-md md:flex-1',
    features: [
      '<strong>10</strong> free credits per week',
      'Access to all basic features',
      'Limit to 1,000 words per generation',
    ],
    buttonClass: 'block rounded-lg border border-primary-500 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-primary-500 shadow-sm transition-colors hover:border-primary-700 hover:bg-primary-50 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300',
    buttonText: 'Get started',
    link: '/#master-box',
    credit: [],
  },
  {
    name: 'pro',
    price: 10,
    class: 'rounded-xl border-2 border-primary-500 bg-white p-6 md:p-8 shadow-md shadow-purple-200 md:flex-1',
    features: [
      'Access to all basic features',
      'Up to 3,000 words per generation',
      '1v1 Customer Service',
    ],
    buttonClass: 'block rounded-lg border border-primary-500 bg-primary-500 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-500 disabled:bg-primary-500',
    buttonText: 'Upgrade now',
    link: 'https://masterpen.lemonsqueezy.com/checkout/buy/d6c012d2-476f-4475-ad78-95f0eddbe116',
    credit: [
      {
        name: '100 Credits',
        value: '100',
        price: 5,
      },
      {
        name: '300 Credits',
        value: '300',
        price: 10,
      },
      {
        name: '1000 Credits',
        value: '1000',
        price: 20,
      },
    ],
  },
  {
    name: 'subscribe',
    price: 29,
    class: 'rounded-xl bg-white p-6 md:p-8 shadow-md md:flex-1',
    features: [
      'Access to all basic features',
      'Up to 3,000 words per generation',
      '1v1 Customer Service',
      'Free trial for 3 days',
    ],
    buttonClass: 'block rounded-lg border border-primary-500 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-primary-500 shadow-sm transition-colors hover:border-primary-700 hover:bg-primary-50 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300',
    buttonText: 'Start Free Trial',
    link: 'https://masterpen.lemonsqueezy.com/checkout/buy/d6c012d2-476f-4475-ad78-95f0eddbe116',
    credit: [
      {
        name: '3000 Credits',
        value: '3000',
        price: 29,
      },
      {
        name: '10000 Credits',
        value: '10000',
        price: 299,
      },
    ],
  },
]
</script>

<template>
  <div class="mx-auto my-24 md:my-40 relative">
    <span id="pricing" class="absolute -top-6 left-0" />
    <p class="text-base text-center font-semibold leading-7 text-primary-500">
      Pricing
    </p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Choose your plan
    </h2>
    <ul
      class="grid-cols-1 grid  mx-auto mt-16 items-end justify-center gap-8 space-y-8 text-slate-700 lg:flex lg:space-y-0 xl:max-w-none"
    >
      <li v-for="pricing in pricings" :key="pricing.name" :class="pricing.class">
        <header>
          <h3 class="font-display text-xl font-medium capitalize" :class="{ 'text-primary-600': isPro(pricing.name) }">
            {{ pricing.name }}
          </h3>
          <h4
            class="font-dispaly my-5 text-4xl font-extrabold"
          >
            ${{ isFree(pricing.name) ? pricing.price : isPro(pricing.name) ? proPlan.price : subscribePlan.price }}
          </h4>
          <div v-if="pricing.credit.length > 0" class="text-sm text-slate-500">
            <ul class="flex items-center gap-2 rounded-lg bg-secondary-50 p-1 text-center text-xs font-medium">
              <li v-for="cre in pricing.credit" :key="cre.value" class="flex-1">
                <input v-if="isPro(pricing.name)" :id="cre.value" v-model="proPlan.credits" :value="cre.value" type="radio" class="peer !hidden">
                <input v-else :id="cre.value" v-model="subscribePlan.credits" :value="cre.value" type="radio" class="peer !hidden">
                <label
                  :for="cre.value"
                  class="block cursor-pointer gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-secondary-700 hover:shadow peer-checked:bg-white peer-checked:shadow"
                  @click="setPlan(cre, pricing.name)"
                >
                  {{ cre.name }}
                </label>
              </li>
            </ul>
          </div>
        </header>
        <ul role="list" class="order-last my-8 flex flex-col gap-y-3 text-sm leading-normal text-secondary-500">
          <li v-if="isPro(pricing.name)" class="flex items-center">
            <svg aria-hidden="true" class="h-6 w-6 flex-none fill-current stroke-current text-secondary-500">
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              />
              <circle
                cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-3">
              Get <strong>{{ proPlan.credits }}</strong> credits, unlimited time.
            </span>
          </li>
          <li v-if="isSubscribe(pricing.name)" class="flex items-center">
            <svg aria-hidden="true" class="h-6 w-6 flex-none fill-current stroke-current text-secondary-500">
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              />
              <circle
                cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-3">
              Get <strong>{{ subscribePlan.credits }}</strong> credits, unlimited time.
            </span>
          </li>
          <li v-for="fea in pricing.features" :key="fea" class="flex items-center">
            <svg aria-hidden="true" class="h-6 w-6 flex-none fill-current stroke-current text-secondary-500">
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              />
              <circle
                cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-3" v-html="fea" />
          </li>
        </ul>
        <a
          :href="pricing.link"
          :class="pricing.buttonClass"
        >
          {{ pricing.buttonText }}
        </a>
      </li>
    </ul>
  </div>
</template>

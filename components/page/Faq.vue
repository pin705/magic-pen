<script setup lang="ts">
const config = useAppConfig()
const postGroup = [
  {
    postTitle: 'What is Dytr?',
    postDescription: 'Dytr, an AI-powered writing tool, unleashes the full potential of GPT-3, generating articles, papers,\n'
            + '            reports, stories, ads, and jokes with ease. It also includes translation, grammar check, and code repair\n'
            + '            functions to enhance your writing capabilities.',
  },
  {
    postTitle: 'Is this app free?',
    postDescription: 'Dytr provides 10 trial credits per week for free accounts, which can be used without logging in. To obtain more credits, you can purchase a Pro or Subscription account.\n',
  },
  {
    postTitle: 'What\'s the difference between free and paid accounts?',
    postDescription: 'Free accounts are limited in both the number of available uses and the number of words generated per use (1,000 words). Paid accounts offer up to 3,000 words per use, and access to exclusive customer service.',
  },
  {
    postTitle: 'How can I purchase credits?',
    postDescription: 'You can click on the Buy Credits button next to Generate or choose a plan on our Pricing page.\n'
        + '\n'
        + 'We accept various payment methods, such as credit card, PayPal, Apple Pay, Google Pay, Alipay, and WeChat Pay, etc. Purchase is simple and fast.',
  },
  {
    postTitle: 'Do students get education discounts?',
    postDescription: 'Yes! If you\'re a student or teacher with an edu email, email us at hi@magickpen.com to receive a 40% education discount code.',
  },
  {
    postTitle: 'How can I login and use my credits?',
    postDescription: 'Once you purchase credits, you\'ll be redirected to account validation and login. If not, or if you need to use credits on a different device, you can validate your account manually: How do I use credits in Dytr?',
  },
  {
    postTitle: 'How can I use Dytr effectively?',
    postDescription: 'Dytr is easy to use. Just choose the type of writing, role, and topic, and receive great content in seconds. Advanced settings allow customization of language, tone, length, and format.\n'
        + '\n'
        + 'For more precise results, please provide a detailed topic description. If needed, our <a href="/?template=2" class="text-primary-500 hover:opacity-80">Article Outline Writing</a> tool can assist you.',
  },
  {
    postTitle: 'What\'s the difference between Pro and Subscription accounts?',
    postDescription: 'Upgrade to a Pro account for flexible choices of 100, 300, and 1000 credits, without time limits. The more you purchase, the more savings you\'ll earn.\n'
        + '\n'
        + 'For high-usage customers, our subscription accounts provide a $29/month billing plan, which is the most cost-effective option and comes with 3000 credits. Subscription only supports credit card payments.',
  },
  {
    postTitle: 'Need more free credits to try Dytr?',
    postDescription: 'Get 10 free credits by tweeting about us with our link (https://magickpen.com/) and mentioning our Twitter handle @GetDytr!',
  },
  {
    postTitle: 'Can I request a refund?',
    postDescription: 'In the event that your credit usage is less than 10% of your purchased credits, contact us at hi@magickpen.com within 30 days for a full refund.\n'
        + '\n'
        + 'Additionally, subscription users have access to a 3-day free trial.',
  },
]
</script>

<template>
  <div id="faq" class="mx-auto my-24 max-w-6xl md:my-40">
    <p class="text-base text-center font-semibold leading-7 text-primary-500">
      Frequently asked questions
    </p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Everything you need to know
    </h2>
    <div class="mx-auto max-w-2xl mt-16">
      <div class="divide-y divide-secondary-200/50">
        <details v-for="post in postGroup" :key="post.postTitle" class="group">
          <summary
            class="flex cursor-pointer list-none items-center justify-between py-4 text-base font-semibold text-secondary-900 group"
          >
            {{ post.postTitle }}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="block h-5 w-5 group-open:hidden group-hover:text-primary-500"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="hidden h-5 w-5 group-open:block group-open:text-primary-500"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div class="pb-4 text-secondary-500 leading-7 space-y-4 text-base" v-html="post.postDescription" />
        </details>
      </div>
      <p class="text-center text-sm text-secondary-400 mt-6">
        Something we didn't cover? We're happy to have <a
          :href="config.feedbackURL"
          class=" underline underline-offset-2 hover:text-primary-500"
          target="_blank"
        >feedback</a>.
      </p>
    </div>
  </div>
</template>

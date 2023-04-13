<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <footer class="py-10 text-sm text-secondary-500">
    <div class="items-start justify-between md:flex pb-20">
      <div>
        <a
          href="/"
          class="inline-flex items-center text-secondary-700 hover:text-primary-500 transition-colors gap-2 text-lg md:text-xl font-bold nuxt-link-active"
        ><img src="/logo.png" alt="" class="h-6 w-6">
          {{ config.siteName }}
        </a>
        <p class="mt-2">
          AI Writing Assistant, powered by ChatGTP
        </p>
      </div>
      <div class="grid grid-cols-2 text-left gap-10 md:flex mt-10 md:mt-0 md:gap-24">
        <div>
          <h3 class="font-semibold text-secondary-700">
            {{ config.siteName }}
          </h3>
          <ul class="space-y-2 mt-4">
            <li><a href="/templates" class="hover:text-primary-500">Templates</a></li>
            <li><a href="/#pricing" class="hover:text-primary-500">Pricing</a></li>
            <li><a href="/#features" class="hover:text-primary-500">Features</a></li>
            <li><a href="/#pricing#faq" class="hover:text-primary-500">FAQ</a></li>
            <!--            <li> -->
            <!--              <a href="https://store.magickpen.com/affiliates" target="_blank" class="hover:text-primary-500">Affiliates</a> -->
            <!--            </li> -->
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-secondary-700">
            Contact
          </h3>
          <ul class="space-y-2 mt-4">
            <li>
              <a :href="config.feedbackURL" target="_black" class="hover:text-primary-500">Feedback</a>
            </li>
            <!--            <li> -->
            <!--              <a -->
            <!--                href="https://twitter.com/GetMagickPen" target="_black" rel="noopener norefferer" -->
            <!--                class="hover:text-primary-500" -->
            <!--              >Twitter</a> -->
            <!--            </li> -->
            <!--            <li><a href="mailto:hi@magickpen.com?subject=Feedback" class="hover:text-primary-500">Email</a></li> -->
            <li>
              <a
                href="https://status.magickpen.com/" target="_black" rel="noopener norefferer"
                class="hover:text-primary-500"
              >Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-secondary-700">
            Our Products
          </h3>
          <ul class="space-y-2 mt-4">
            <li>
              <a
                :href="config.siteURL" title="AI Writing Assistant, powered by ChatGTP"
                class="hover:text-primary-500"
              >{{ config.siteName }}</a>
            </li>
            <li>
              <a
                href="https://www.teach-anything.com/" title="Teach you Anything in seconds" target="_black"
                rel="noopener norefferer" class="hover:text-primary-500"
              >Teach Anything</a>
            </li>
            <li>
              <a
                href="https://openl.io/" title="Amazing Translator, powered by AI" target="_black"
                rel="noopener norefferer" class="hover:text-primary-500"
              >OpenL</a>
            </li>
            <li>
              <a
                href="https://ai2045.com/" title="Discover AI tools for the future" target="_black"
                rel="noopener norefferer" class="hover:text-primary-500"
              >AI2045</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="mt-1 text-xs opacity-40 text-center">
      Illustration by
      <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from
      <a href="https://icons8.com/illustrations">Ouch!</a>
    </p>
  </footer>
</template>

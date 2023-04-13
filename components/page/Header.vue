<template>
  <header>
    <div class="flex items-center justify-between pt-5">
      <a href="/" class="inline-flex items-center gap-2 text-lg md:text-2xl font-bold nuxt-link-active">
        <img src="/logo.png" alt="" class="h-6 w-6 md:h-10 md:w-10">
        MasterPen
      </a>
      <ul class="hidden gap-10 font-display text-[15px] font-medium text-secondary-700 md:flex header-menu">
        <li>
          <NuxtLink to="/templates" class="relative cursor-pointer px-2 leading-7 hover:text-primary-500">
            Templates<small class="ml-1 rounded bg-primary-500 px-1 py-0.5 text-xs font-medium text-white">NEW</small>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="px-2 leading-7 hover:text-primary-500">
            Pricing
          </NuxtLink>
        </li>
        <!--        <li> -->
        <!--          <a href="https://store.magickpen.com/affiliates" target="_blank" class="px-2 leading-7 hover:text-primary-500">Affiliates</a> -->
        <!--        </li> -->
      </ul>
      <div class="flex items-center gap-3 md:gap-5">
        <div>
          <a class="cursor-pointer hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z" /> <path data-v-e7e55eb2="" fill-rule="evenodd" d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z" clip-rule="evenodd" /></svg></a>
        </div>
        <a href="/#master-box" aria-current="page" class="rounded-full md:min-w-[110px] border border-primary-500 bg-primary-500 px-3 py-1.5 md:px-4 md:py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 nuxt-link-exact-active nuxt-link-active">Get started</a>
      </div>
    </div>
  </header>
</template>

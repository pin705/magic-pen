<script setup>
</script>

<template>
  <div class="scrollbar-hide overflow-auto">
    <ul class="flex flex-nowrap gap-2 text-sm">
      <li class="flex-none">
        <input
          id="category1" type="radio" checked="checked" class="peer hidden" value="1"
          data-gtm-form-interact-field-id="1"
        > <label
          for="category1"
          class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          <div class="block">Write</div>
        </label>
      </li>
      <li class="flex-none">
        <input id="category2" type="radio" class="peer hidden" value="2"> <label
          for="category2"
          class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          <div class="block">Translate</div>
        </label>
      </li>
      <li class="flex-none">
        <input id="category3" type="radio" class="peer hidden" value="3"> <label
          for="category3"
          class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          <div class="block">Grammar</div>
        </label>
      </li>
      <li class="flex-none">
        <input
          id="category4" type="radio" class="peer hidden" value="4"
          data-gtm-form-interact-field-id="0"
        > <label
          for="category4"
          class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
        >
          <div class="block">Coding</div>
        </label>
      </li>
    </ul>
  </div>
</template>

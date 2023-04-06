<script setup lang="ts">
import { wantToWrite, whatRole } from '@/constants/scripts'

const emits = defineEmits(['generate'])
function generate() {
  emits('generate')
}
</script>

<template>
  <aside class="border-slate-200 p-5 md:w-[385px] md:border-r">
    <form class="space-y-6" data-gtm-form-interact-id="0">
      <MagicCategory />
      <div class="space-y-6">
        <div>
          <label for="type" class="mb-3 block text-sm text-secondary-500">What do you want to write?</label>
          <div class="my-2">
            <div tabindex="-1" role="combobox" aria-owns="listbox-null" class="multiselect">
              <div class="multiselect__select" />
              <div class="multiselect__tags">
                <div class="multiselect__tags-wrap" style="display: none;" />
                <div class="multiselect__spinner" style="display: none;" /> <input
                  name="" type="text"
                  autocomplete="off" spellcheck="false" placeholder="Type to search" tabindex="0"
                  aria-controls="listbox-null" class="multiselect__input"
                  style="width: 0px; position: absolute; padding: 0px;" aria-activedescendant="null-1"
                > <span
                  class="multiselect__single"
                >Article Writing</span>
              </div>
              <div tabindex="-1" class="multiselect__content-wrapper" style="max-height: 218px; display: none;">
                <ul id="listbox-null" role="listbox" class="multiselect__content" style="display: inline-block;">
                  <li v-for="item in wantToWrite" :key="item" class="multiselect__element">
                    <span class="multiselect__option multiselect__option--disabled multiselect__option--group"><span>
                      {{ item }}
                    </span>
                    </span>
                  </li>
                  <li style="display: none;">
                    <span class="multiselect__option"><span>Oops! No elements found. Consider
                      changing the search query.
                    </span></span>
                  </li>
                  <li style="display: none;">
                    <span class="multiselect__option">List is empty.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label for="role" class="mb-3 block text-sm text-secondary-500">What role do you want to play?</label>
          <div class="my-3">
            <select
              id="role"
              class="block w-full rounded-md border-secondary-300 text-sm capitalize shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
              placeholder="Select" data-gtm-form-interact-field-id="2"
            >
              <option selected="selected" value="">
                Select
              </option>
              <option v-for="item in whatRole" value="student">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="label5" class="mb-3 block text-sm text-secondary-500">Tell about your subject</label>
          <div class="my-3">
            <div class="relative">
              <button
                type="button"
                class="group z-10 absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md bg-white/70 text-secondary-500 transition-all hover:border hover:border-secondary-100 hover:bg-white hover:text-primary-600 hover:shadow-sm"
              >
                <span
                  class="invisible absolute -top-6 min-w-[40px] rounded-md bg-black bg-opacity-70 px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:-top-7 group-hover:opacity-100"
                >Example</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                  <path
                    d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
                  />
                </svg>
              </button>
              <div
                class="enhanceai-wrapper"
                style="position: relative; width: 100%; margin-right: calc(0%); margin-top: 0px; text-align: left; box-sizing: border-box; display: block;"
              >
                <textarea
                  placeholder="" data-aicontext="Help continue writing the topic"
                  class="block w-full rounded-md border-secondary-300 text-sm shadow-sm placeholder:text-secondary-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50 enhanceai-overlay"
                  style="accent-color: auto; place-content: normal; place-items: normal; place-self: auto; alignment-baseline: auto; animation: 0s ease 0s 1 normal none running none; app-region: none; appearance: none; backdrop-filter: none; backface-visibility: visible; background: transparent; background-blend-mode: normal; baseline-shift: 0px; baseline-source: auto; block-size: 158px; border-block-end: 1px solid rgb(203, 213, 225); border-block-start: 1px solid rgb(203, 213, 225); border-radius: 6px; border-style: solid; border-width: 1px; border-collapse: separate; border-end-end-radius: 6px; border-end-start-radius: 6px; border-image: none 100% / 1 / 0 stretch; border-inline-end: 1px solid rgb(203, 213, 225); border-inline-start: 1px solid rgb(203, 213, 225); border-color: transparent; border-start-end-radius: 6px; border-start-start-radius: 6px; inset: auto; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; box-sizing: border-box; break-after: auto; break-before: auto; break-inside: auto; buffered-rendering: auto; caption-side: top; caret-color: rgb(0, 0, 0); clear: none; clip: auto; clip-path: none; clip-rule: nonzero; color: rgb(0, 0, 0); color-interpolation: srgb; color-interpolation-filters: linearrgb; color-rendering: auto; columns: auto; gap: normal; column-rule: 0px none rgb(0, 0, 0); column-span: none; contain-intrinsic-block-size: none; contain-intrinsic-size: none; contain-intrinsic-inline-size: none; container: none; content: normal; cursor: text; cx: 0px; cy: 0px; d: none; direction: ltr; display: block; dominant-baseline: auto; empty-cells: show; fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: nonzero; filter: none; flex: 0 1 auto; flex-flow: row nowrap; float: none; flood-color: rgb(0, 0, 0); flood-opacity: 1; font-family: Inter, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;system-ui&quot;, &quot;segoe ui&quot;, &quot;helvetica neue&quot;, Arial, &quot;noto sans&quot;, &quot;apple color emoji&quot;, &quot;segoe ui emoji&quot;, &quot;segoe ui symbol&quot;, &quot;noto color emoji&quot;; font-kerning: auto; font-optical-sizing: auto; font-palette: normal; font-size: 14px; font-stretch: 100%; font-style: normal; font-synthesis: weight style small-caps; font-variant: normal; font-weight: 400; grid: auto-flow auto / none; grid-area: auto / auto / auto / auto; height: 158px; hyphenate-character: auto; hyphenate-limit-chars: auto; hyphens: manual; image-orientation: from-image; image-rendering: auto; initial-letter: normal; inline-size: 344px; inset-block: auto; inset-inline: auto; isolation: auto; letter-spacing: normal; lighting-color: rgb(255, 255, 255); line-break: auto; line-height: 20px; list-style: outside none disc; margin-block: 0px; margin: 0px; margin-inline: 0px; marker: none; mask-type: luminance; math-depth: 0; math-shift: normal; math-style: normal; max-block-size: none; max-height: none; max-inline-size: none; max-width: none; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; mix-blend-mode: normal; object-fit: fill; object-position: 50% 50%; object-view-box: none; offset: none 0px auto 0deg; opacity: 0.5; order: 0; orphans: 2; outline: none; outline-offset: 0px; overflow-anchor: auto; overflow-clip-margin: 0px; overflow-wrap: break-word; overflow: hidden; overscroll-behavior-block: auto; overscroll-behavior-inline: auto; padding-block: 8px; padding: 8px 12px; padding-inline: 12px; paint-order: normal; perspective: none; perspective-origin: 172px 79px; pointer-events: none; position: absolute; r: 0px; resize: vertical; rotate: none; ruby-position: over; rx: auto; ry: auto; scale: none; scroll-behavior: auto; scroll-margin-block: 0px; scroll-margin-inline: 0px; scroll-padding-block: auto; scroll-padding-inline: auto; scrollbar-gutter: auto; shape-image-threshold: 0; shape-margin: 0px; shape-outside: none; shape-rendering: auto; speak: normal; stop-color: rgb(0, 0, 0); stop-opacity: 1; stroke: none; stroke-dasharray: none; stroke-dashoffset: 0px; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 1px; tab-size: 4; table-layout: auto; text-align: start; text-align-last: auto; text-anchor: start; text-decoration: none solid rgb(0, 0, 0); text-decoration-skip-ink: auto; text-emphasis: none rgb(0, 0, 0); text-emphasis-position: over; text-indent: 0px; text-overflow: clip; text-rendering: auto; text-shadow: none; text-size-adjust: 100%; text-transform: none; text-underline-position: auto; touch-action: auto; transform: none; transform-origin: 172px 79px; transform-style: flat; transition: all 0s ease 0s; translate: none; unicode-bidi: normal; user-select: auto; vector-effect: none; vertical-align: baseline; view-transition-name: none; visibility: visible; white-space: pre-wrap; widows: 2; width: 344px; will-change: auto; word-break: normal; word-spacing: 0px; writing-mode: horizontal-tb; x: 0px; y: 0px; z-index: 1000; zoom: 1; border-spacing: 0px; -webkit-border-image: none; -webkit-box-align: stretch; -webkit-box-decoration-break: slice; -webkit-box-direction: normal; -webkit-box-flex: 0; -webkit-box-ordinal-group: 1; -webkit-box-orient: horizontal; -webkit-box-pack: start; -webkit-font-smoothing: antialiased; -webkit-highlight: none; -webkit-line-break: auto; -webkit-locale: &quot;en&quot;; -webkit-mask-box-image-source: none; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-width: auto; -webkit-mask-box-image-outset: 0; -webkit-mask-box-image-repeat: stretch; -webkit-mask: none 0% 0% / auto repeat border-box border-box; -webkit-mask-composite: source-over; -webkit-print-color-adjust: economy; -webkit-rtl-ordering: logical; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18); -webkit-text-combine: none; -webkit-text-decorations-in-effect: none; -webkit-text-fill-color: rgb(0, 0, 0); -webkit-text-orientation: vertical-right; -webkit-text-security: none; -webkit-text-stroke: 0px rgb(0, 0, 0); -webkit-user-drag: auto; -webkit-user-modify: read-only; -webkit-writing-mode: horizontal-tb;"
                  data-gtm-form-interact-field-id="3" suppresscontenteditablewarning="true"
                /><textarea
                  id="label5" rows="7" placeholder="Example:
  1. Introduction
  2. History of Artificial Intelligence
  3. Benefits of Artificial Intelligence
  4. Challenges of Artificial Intelligence
  5. Future of Artificial Intelligence" data-aicontext="Help continue writing the topic"
                  class="block w-full rounded-md border-secondary-300 text-sm shadow-sm placeholder:text-secondary-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
                  style="margin-top: 0px;" data-gtm-form-interact-field-id="3"
                />
              </div>
            </div> <!----> <!---->
          </div>
        </div>
        <div>
          <details class="group -my-2" open="">
            <summary
              class="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-medium text-secondary-900"
            >
              <label class="block text-sm font-medium text-secondary-700">Advanced</label>
              <div class="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor"
                  class="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </summary>
            <div class="space-y-5 py-2 text-sm text-secondary-500">
              <div>
                <label class="mb-2 block text-sm text-secondary-500">Language</label>
                <div class="mt-2">
                  <select
                    id="lang"
                    class="block w-full rounded-md border-secondary-300 text-sm shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50"
                  >
                    <option value="that">
                      Automatic
                    </option>
                    <option value="English">
                      English
                    </option>
                    <option value="French">
                      Français
                    </option>
                    <option value="Spanish">
                      Español
                    </option>
                    <option value="Simplified Chinese">
                      简体中文
                    </option>
                    <option value="Traditional Chinese">
                      繁體中文
                    </option>
                    <option value="Japanese">
                      日本語
                    </option>
                    <option value="German">
                      Deutsch
                    </option>
                    <option value="Russian">
                      Русский
                    </option>
                    <option value="Arabic">
                      العربية
                    </option>
                    <option value="Hindi">
                      हिंदी
                    </option>
                    <option value="Portuguese">
                      Português
                    </option>
                    <option value="Italian">
                      Italiano
                    </option>
                    <option value="Korea">
                      한국어
                    </option>
                    <option value="Dutch">
                      Nederlands
                    </option>
                    <option value="Swedish">
                      Svenska
                    </option>
                    <option value="Norwegian">
                      Norsk
                    </option>
                    <option value="Danish">
                      Dansk
                    </option>
                    <option value="Finnish">
                      Suomi
                    </option>
                    <option value="Polish">
                      Polski
                    </option>
                    <option value="Turkish">
                      Türkçe
                    </option>
                    <option value="Indonesian">
                      Bahasa Indonesia
                    </option>
                    <option value="Malay">
                      Bahasa Melayu
                    </option>
                    <option value="Thai">
                      ไทย (Thai)
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm text-secondary-500">Publish</label>
                <div class="scrollbar-hide overflow-auto">
                  <ul class="flex flex-nowrap gap-2 text-sm">
                    <li class="flex-none">
                      <input
                        id="where1" type="radio" value="anywhere" checked="checked"
                        class="peer hidden"
                      > <label
                        for="where1"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Anywhere</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="where4" type="radio" value="work" class="peer hidden"> <label
                        for="where4"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Work</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="where2" type="radio" value="email" class="peer hidden"> <label
                        for="where2"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Email</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="where3" type="radio" value="social media" class="peer hidden">
                      <label
                        for="where3"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Social Media</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm text-secondary-500">Tone</label>
                <div class="scrollbar-hide overflow-auto">
                  <ul class="flex flex-nowrap gap-2 text-sm">
                    <li class="flex-none">
                      <input
                        id="tone1" type="radio" value="neutral" checked="checked"
                        class="peer hidden"
                      > <label
                        for="tone1"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Neutral</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="tone2" type="radio" value="formal" class="peer hidden"> <label
                        for="tone2"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Formal</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="tone3" type="radio" value="joyful" class="peer hidden"> <label
                        for="tone3"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Joyful</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="tone4" type="radio" value="sad" class="peer hidden"> <label
                        for="tone4"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Sad</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm text-secondary-500">Length</label>
                <div class="scrollbar-hide overflow-auto">
                  <ul class="flex flex-nowrap gap-2 text-sm">
                    <li class="flex-none">
                      <input
                        id="length1" type="radio" value="short" checked="checked"
                        class="peer hidden"
                      > <label
                        for="length1"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Short</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="length2" type="radio" value="medium" class="peer hidden"> <label
                        for="length2"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Medium</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <label
                        class="cursor-pointer inline-flex w-full items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Long</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm text-secondary-500">Format</label>
                <div class="scrollbar-hide overflow-auto">
                  <ul class="flex flex-nowrap gap-2 text-sm">
                    <li class="flex-none">
                      <input
                        id="format1" type="radio" value="text" checked="checked"
                        class="peer hidden"
                      > <label
                        for="format1"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Text</div>
                      </label>
                    </li>
                    <li class="flex-none">
                      <input id="format2" type="radio" value="markdown" class="peer hidden">
                      <label
                        for="format2"
                        class="inline-flex w-full cursor-pointer items-center justify-between rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-secondary-500 hover:bg-slate-50 hover:text-secondary-600 peer-checked:border-primary-600 peer-checked:text-primary-600"
                      >
                        <div class="block">Markdown</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="flex-1 rounded-lg border border-primary-500 bg-primary-500 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-500 disabled:bg-primary-500 disabled:opacity-80"
          @click="generate"
        >
          <div>Generate</div>
        </button> <a
          href="https://magickpen.lemonsqueezy.com/checkout/buy/b00f9189-7054-42a7-84e9-510f38fe5a31"
          class="rounded-lg border border-primary-500 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-primary-500 shadow-sm transition-all hover:border-primary-700 hover:bg-primary-50 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
        >
          Buy Credits
        </a>
      </div>
      <div class="flex items-center justify-between gap-2 text-sm text-secondary-500">
        <div class="flex items-center justify-between gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="1em"
            height="1em" viewBox="0 0 256 256"
          >
            <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
            <path
              fill="currentColor" d="M232 104c0 24-40 48-104 48S24 128 24 104s40-48 104-48s104 24 104 48Z"
              opacity=".2"
            />
            <path
              fill="currentColor"
              d="M207.6 63.8C186.8 53.5 159.3 48 128 48s-58.8 5.5-79.6 15.8S16 88.8 16 104v48c0 15.2 11.8 29.9 32.4 40.2S96.7 208 128 208s58.8-5.5 79.6-15.8s32.4-25 32.4-40.2v-48c0-15.2-11.8-29.9-32.4-40.2ZM128 64c62.6 0 96 23.2 96 40c0 9.9-11.7 22.2-34.4 30.5h-.3c-15.5 5.6-36 9.4-61.3 9.4s-45.8-3.8-61.3-9.4h-.3C43.7 126.2 32 113.9 32 104c0-16.8 33.4-40 96-40Zm-8 95.9v32c-19-.7-35-3.5-48-7.5V153c14.3 4 30.5 6.3 48 6.9Zm16 0c17.5-.6 33.7-2.9 48-6.9v31.4c-13 4-29 6.8-48 7.5ZM32 152v-18.5a84.5 84.5 0 0 0 16.4 10.7l7.6 3.4V178c-15.8-7.8-24-17.7-24-26Zm168 26v-30.4l7.6-3.4a84.5 84.5 0 0 0 16.4-10.7V152c0 8.3-8.2 18.2-24 26Z"
            />
          </svg> <span>1 credits left!</span>
        </div>
        <div>
          <div class="flex justify-center">
            <a class="cursor-pointer hover:text-primary-500 hover:underline">Apply
              Credits</a>
          </div>
        </div>
      </div>
    </form>
  </aside>
</template>

import type { Component, PropType, VNode } from 'vue'
import { defineComponent, h } from 'vue'
import type { Options as MarkdownItOptions } from 'markdown-it'
import MarkdownIt from 'markdown-it'

export { Options } from 'markdown-it'

const VueMarkdown: Component = defineComponent({
  name: 'VueMarkdown',
  props: {
    source: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<MarkdownItOptions>,
      required: false,
    },
  },
  data() {
    return {
      md: null as MarkdownIt | null,
    }
  },
  computed: {
    content(): string | undefined {
      const src = this.source
      return this.md?.render(src)
    },
  },
  created() {
    this.md = new MarkdownIt(this.options ?? {})
  },
  render(): VNode {
    return h('div', { innerHTML: this.content })
  },
})

export default VueMarkdown

import type { CodeTask } from '~/types'

export interface RequestSubmitGPT {
  category: number
  templateId: number
  where: string
  role: string
  tone: string
  length: string
  format: string
  lang: string
  targetLang: string
  text: string
  explain: boolean
  codeTask: CodeTask
  wantWrite: string
}

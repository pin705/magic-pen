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
  codeTask: string
  wantWrite: string
}

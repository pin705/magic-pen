export interface Template {
  _id: string
  id: number
  title: string
  description: string
  icon: string
  thumb: string
  category: string
  prompt_user: {
    role: string
    placeholder: string
  }
  use_count?: number
}

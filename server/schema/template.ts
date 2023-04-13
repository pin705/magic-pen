import mongoose from 'mongoose'
import type { Template } from '~/types'

const ObjectId = mongoose.Types.ObjectId
const schema = new mongoose.Schema<Template>(
  {
    _id: {
      type: String,
      default() {
        return new ObjectId().toString()
      },
    },
    id: {
      type: Number,
    },
    title: String,
    description: String,
    icon: String,
    category: String,
    prompt_user: {
      role: String,
      placeholder: String,
    },
    thumb: String,
    use_count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

export const templateSchema = mongoose.model('template_schema', schema, 'templates')

import mongoose from 'mongoose'
import type { CategoryTemplate } from '~/types'

const ObjectId = mongoose.Types.ObjectId
const schema = new mongoose.Schema<CategoryTemplate>(
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
    description: String,
    icon: [],
    category: String,
    thumb: String,
    title: String,
  },
  {
    timestamps: true,
  },
)

export const categorySchema = mongoose.model('category_schema', schema, 'categorys')

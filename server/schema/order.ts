import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default() {
        return new ObjectId().toString()
      },
    },
    meta: {},
    data: {},
  },
  {
    timestamps: true,
  },
)

export const orderSchema = mongoose.model('order_schema', schema, 'orders')

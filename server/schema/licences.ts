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
    key: String,
    activationUsage: Number,
  },
  {
    timestamps: true,
  },
)

export const licenseSchema = mongoose.model('licenses', schema, 'licenses')

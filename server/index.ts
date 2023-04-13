import mongoose from 'mongoose'

export default async () => {
  const config = useRuntimeConfig()

  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    // eslint-disable-next-line no-console
    console.log('Starting mongoose...')
  }
  catch (err) {
    console.error('DB connection failed.', err)
  }
}

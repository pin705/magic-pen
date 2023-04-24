import { orderSchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('body', body)
  if (body) {
    await orderSchema.findOneAndUpdate({
      'data.id': body.data.id,
      'data.attributes.status': body.data.attributes.status,
    }, {
      meta: body.meta,
      data: body.data,
    }, {
      upsert: true,
      new: true,
    })
  }

  return true
})

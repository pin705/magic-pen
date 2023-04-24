import {licenseSchema} from "~/server/schema";

interface LicenseValidate {
    valid: boolean
    error?: string | null
    license_key: {
        id: number
        status: string,
        key: string,
        activation_limit: number,
        activation_usage: number,
        created_at: string,
        expires_at: string,
        test_mode: boolean
    },
    "instance": any,
    "meta": {
        "store_id": number,
        "order_id": number,
        "order_item_id": number,
        "product_id": number,
        "product_name": string,
        "variant_id": number,
        "variant_name": string,
        "customer_id": number,
        "customer_name": string,
        "customer_email": string
    }
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const res = await $fetch<LicenseValidate>('https://api.lemonsqueezy.com/v1/licenses/validate', {
        method: 'POST',
        body: {
            license_key: body.license_key,
        }
    })

    const { valid, meta, license_key } = res

    if (valid) {
        const key = license_key.key
        const activationUsage = license_key.activation_limit

        const keyExits = await licenseSchema.findOne({ key })

        if (!keyExits) {
            await licenseSchema.insertMany([{
                key,
                activationUsage: activationUsage,
            }])

            return {
                status: true,
                data: {
                    key: `LICENSE-${key}`,
                    activationUsage: activationUsage,
                }
            }
        }

        return {
            status: true,
            data: {
                key: `LICENSE-${keyExits.key}`,
                activationUsage: keyExits.activationUsage,
            }
        }
    }

    return res
})

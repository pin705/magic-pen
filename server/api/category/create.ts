import { categorySchema } from '~/server/schema'

export default defineEventHandler(async (event) => {
  const myHeaders = new Headers()
  myHeaders.append('authority', 'api.magickpen.com')
  myHeaders.append('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7')
  myHeaders.append('accept-language', 'en-US,en;q=0.9,vi;q=0.8')
  myHeaders.append('cache-control', 'max-age=0')
  myHeaders.append('cookie', '_ga=GA1.1.1156309862.1680790382; _clck=1qrgv1g|1|fap|0; crisp-client%2Fsession%2F0d31d9bd-2da9-4f0b-a626-1709883c4692=session_89aab7c9-ee1f-4142-a5e4-2bbb774daeef; _clsk=yh73vp|1681284699970|11|1|p.clarity.ms/collect; _ga_LC6NWS3DG8=GS1.1.1681283857.11.1.1681284700.0.0.0')
  myHeaders.append('sec-ch-ua', '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"')
  myHeaders.append('sec-ch-ua-mobile', '?0')
  myHeaders.append('sec-ch-ua-platform', '"macOS"')
  myHeaders.append('sec-fetch-dest', 'document')
  myHeaders.append('sec-fetch-mode', 'navigate')
  myHeaders.append('sec-fetch-site', 'none')
  myHeaders.append('sec-fetch-user', '?1')
  myHeaders.append('upgrade-insecure-requests', '1')
  myHeaders.append('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36')

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch('https://api.magickpen.com/template/category/', requestOptions)
    .then(response => response.json())
    .then(async (result) => {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          await categorySchema.findOneAndUpdate({ id: result[i].id }, {
            ...result[i],
          }, {
            upsert: true,
            new: true,
          })
        }
      }
    })
    .catch(error => console.log('error', error))

  return true
})

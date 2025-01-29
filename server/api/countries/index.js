export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { name, region } = query

  const baseUrl = 'https://restcountries.com/v3.1'
  const fields = '?fields=name,cca3,population,region,capital,flags,languages'

  let url = ''

  if (name) {
    url = `${baseUrl}/name/${name}${fields}`
  } else if (region) {
    url = `${baseUrl}/region/${region}${fields}`
  } else {
    url = `${baseUrl}/all${fields}`
  }

  try {
    const data = await $fetch(url)
    return data
  } catch(error) {
    return {
      statusCode: error?.response?.status || 500,
      message: error?.response?.statusText || 'Internal Server Error'
    }
  }
})

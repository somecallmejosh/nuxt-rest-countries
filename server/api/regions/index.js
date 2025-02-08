export default defineEventHandler(async () => {
  let endpoint = []
  let regions = []

  try {
    endpoint = await $fetch(`https://restcountries.com/v3.1/all`)
    regions = endpoint.reduce((acc, country) => {
      if (!acc.includes(country.region)) {
        acc.push(country.region)
      }
      return acc
    }, [])
  } catch (error) {
    return {
      statusCode: error?.response?.status || 500,
      message: error?.response?.statusText || 'Internal Server Error',
    }
  }
  return regions
})

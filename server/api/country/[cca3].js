export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'cca3')
  const baseUrl = 'https://restcountries.com/v3.1/alpha'
  let endpoint = []
  let borderCountries = []

  try {
    endpoint = await $fetch(`${baseUrl}?codes=${name}&fields=cca3,flags,name,common,region,population,capital,borders,languages,currencies,tld,subregion`)
  } catch (error) {
    return {
      statusCode: error?.response?.status || 500,
      message: 'Error fetching main endpoint',
      status: error?.response?.statusText
    }
  }

  try {
    borderCountries = await $fetch(`${baseUrl}?codes=${endpoint[0].borders.join(',')}&fields=cca3,name`)
  } catch (error) {
    if (!error) {
      return {
        statusCode: 404,
        message: 'No border countries found',
        status: 'Not Found'
      }
    }
  }

  const combinedData = {
    ...endpoint[0],
    borderCountries
  }

  return combinedData
})

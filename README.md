# Nuxt Rest Countries

Project Tasks: https://github.com/users/somecallmejosh/projects/2/views/1

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/somecallmejosh/nuxt-rest-countries.git
  ```
2. Navigate to the project directory:
  ```bash
  cd nuxt-rest-countries
  ```
3. Install dependencies:
  ```bash
  npm install
  ```

## Usage

1. Start the development server:
  ```bash
  npm run dev
  ```
2. Open your browser and visit `http://localhost:3000`

## Build for Production

1. Generate the static files:
  ```bash
  npm run generate
  ```
2. Deploy the `dist` directory to your preferred hosting service


## Features

- Fetches data from the REST Countries API
- Displays country details including population, region, and capital
- Search functionality to find countries by name
- Filter countries by region
- Responsive design for mobile and desktop

## API

### `/api/countries?params`

API endpoint to fetch country data from the REST Countries API.

This endpoint allows users to fetch country data based on query parameters.
It supports fetching data by country name, region, or all countries if no
specific query parameters are provided.

## Query Parameters
- `name` (optional): The name of the country to fetch data for.
- `region` (optional): The region to fetch countries from.

## Response
The response is an array of country objects containing the following fields:
- `name`: The name of the country.
- `cca3`: The 3-letter country code.
- `population`: The population of the country.
- `region`: The region the country belongs to.
- `capital`: The capital city of the country.
- `flags`: The flag of the country.
- `languages`: The languages spoken in the country.

## Example Usage

Fetching data for a specific country by name:
```javascript
const response = await fetch('/api/countries?name=France')
const data = await response.json()
console.log(data)
```

Fetching data for countries in a specific region:
```javascript
const response = await fetch('/api/countries?region=Europe')
const data = await response.json()
console.log(data)
```

Fetching data for all countries:
```javascript
const response = await fetch('/api/countries')
const data = await response.json()
console.log(data)
```

@param `{Object} event` - The event object representing the incoming request.
@returns `{Promise<Object[]>}` The country data fetched from the REST Countries API.


### `/api/countries/country/[cca3]`

This file defines an API endpoint for fetching detailed information about a country
based on its CCA3 code, including its border countries.

This API handler fetches detailed information about a country using the REST Countries API.
It retrieves data such as the country's name, flags, region, population, capital, borders, languages, currencies, top-level domain, and subregion. Additionally, it fetches information about the country's border countries.

Example request:
`GET /api/country/USA`

Example response:

```json
{
  "cca3": "USA",
  "flags": { ... },
  "name": { ... },
  "common": "United States",
  "region": "Americas",
  "population": 331002651,
  "capital": ["Washington, D.C."],
  "borders": ["CAN", "MEX"],
  "languages": { ... },
  "currencies": { ... },
  "tld": [".us"],
  "subregion": "Northern America",
  "borderCountries": [
    { "cca3": "CAN", "name": { ... } },
    { "cca3": "MEX", "name": { ... } }
  ]
}
```

@param `{Object}` event - The event object provided by the server framework.
@param `{string}` event.context.params.cca3 - The CCA3 code of the country to fetch information for.

@returns `{Object}` The combined data of the country and its border countries.
@returns `{number} [statusCode]` - The HTTP status code in case of an error.
@returns `{string} [message]` - The error message in case of an error.
@returns `{string} [status]` - The HTTP status text in case of an error.


### `/api/countries/regions/index`

This API endpoint fetches all countries from the REST Countries API
and extracts unique regions from the fetched data.

@async
@function
@name default
@returns `{Promise<Array<string>>}` - A promise that resolves to an array of unique regions.

Example usage:
```javascript
import getRegions from '/api/regions';

getRegions().then(regions => {
  console.log(regions); // Output: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', ...]
}).catch(error => {
  console.error('Error fetching regions:', error);
});
```

@throws `{Object}` - Throws an error object with statusCode and message properties
if the fetch request fails.

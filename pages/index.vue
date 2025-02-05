<script setup>
import { useDebounceFn } from '@vueuse/core'
const route = useRoute()
const router = useRouter()

const buildCountriesUrl = (queryObject) => {
  if (!queryObject || Object.keys(queryObject).length === 0) {
    return '/api/countries'
  }

  const queryString = Object.keys(queryObject)
    .map((key) => `${key}=${queryObject[key]}`)
    .join('&')

  return `/api/countries?${queryString}`
}

const url = computed(() => buildCountriesUrl(route.query))

const { data } = useFetch(url)
const name = ref(route.query.name ?? '')

const filterResults = useDebounceFn(() => {
  if (!name.value) {
    router.push({path: '/'})
    return
  }
  router.push({path: '/', query: { name: name.value } })
}, 500)

const clearSearch = () => {
  router.push({path: '/'})
  name.value = ''
  document.querySelector('input').focus()
}

useSeoMeta({
  title: 'Where in the world?',
  description: 'List of countries throughout the world',
  ogDescription: 'List of countries throughout the world',
  ogImage: 'https://flagcdn.com/w320/us.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div class="py-8 lg:py-12 space-y-6 lg:space-y-12">
    <section aria-label="Search and filters" class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div class="flex-1">
        <div class="box-shadow w-full max-w-[30rem] h-[3rem] pl-[1.5rem] pr-[4rem] bg-white text-sm dark:bg-ebony-clay dark:text-white rounded-[0.3125rem] relative">
          <input type="text" @keyup="filterResults" v-model="name" placeholder="Search for a country..." class="absolute inset-0 pr-2 pl-10 bg-[rgba(0,0,0,0)]" />
          <icons-search class="absolute size-4 left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div>
        <client-only>
          <filters-regions />
        </client-only>
      </div>
    </section>
    <client-only v-if="data.length > 0" >
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-12 gap-6">
        <Card v-for="(country, index) in data" :index="index" :key="country.name" :country="country" />
      </ul>
    </client-only>
    <no-results :name="name" :clearSearch="clearSearch" v-else />
  </div>
</template>

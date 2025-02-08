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
    router.push({ path: '/' })
    return
  }
  router.push({ path: '/', query: { name: name.value } })
}, 500)

const clearSearch = () => {
  router.push({ path: '/' })
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
  <div class="space-y-8 py-8 lg:space-y-12 lg:py-12">
    <section
      aria-label="Search and filters"
      class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
    >
      <div class="flex-1">
        <div
          class="box-shadow relative h-[3rem] w-full max-w-[30rem] rounded-[0.3125rem] bg-white pl-[1.5rem] pr-[4rem] dark:bg-ebony-clay dark:text-white"
        >
          <input
            type="text"
            @keyup="filterResults"
            v-model="name"
            placeholder="Search for a country..."
            class="box-shadow absolute inset-0 bg-[rgba(0,0,0,0)] pl-10 pr-2 text-xs placeholder-[#848484] dark:placeholder-white lg:text-sm"
          />
          <icons-search
            class="absolute left-3 top-1/2 size-4 -translate-y-1/2"
          />
        </div>
      </div>
      <div>
        <client-only>
          <filters-regions />
        </client-only>
      </div>
    </section>
    <client-only v-if="data.length > 0">
      <ul
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4"
      >
        <Card
          v-for="(country, index) in data"
          :index="index"
          :key="country.name"
          :country="country"
        />
      </ul>
    </client-only>
    <no-results :name="name" :clearSearch="clearSearch" v-else />
  </div>
</template>
<style scoped>
.box-shadow {
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
</style>

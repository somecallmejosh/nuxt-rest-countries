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

const searchField = ref(null)
const clearSearch = () => {
  router.push({path: '/'})
  name.value = ''
  document.querySelector('input').focus()
}


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
        <filters-regions />
      </div>
    </section>
    <ul v-if="data.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-12 gap-6">
      <Card v-for="country in data" :key="country.name" :country="country" />
    </ul>
    <div class="flex flex-col gap-2 lg:flex-row lg:items-center" role="alert" aria-live="assertive" v-else>
      <icons-oops class="size-28 lg:size-40 shrink-0"/>
      <div>
        <h1 class="font-800 text-3xl">Uhhh... Say What?</h1>
        <p>Is like... <strong class="bg-black/10 p-1 italic dark:bg-white/10">{{ name }}</strong> actually a country and stuff?</p>
        <p class="mb-2">Maybe give your search another go.</p>
        <button @click="clearSearch" class="bg-black/10 font-600 dark:bg-black dark:border-ebony-clay rounded-[0.3125rem] px-2 py-1 box-shadow">Clear Search</button>
      </div>
    </div>
  </div>
</template>

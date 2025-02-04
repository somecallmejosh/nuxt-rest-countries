<script setup>
const route = useRoute()

const url = computed(() => {
  if (!route.query) return '/api/countries'
  return `/api/countries?${Object.keys(route.query)
    .map(key => `${key}=${route.query[key]}`)
    .join('&')}`
})

const { data, pending, error } = await useFetch(url)

// watch route params, and refetch data when they change
watchEffect(() => {
  const url = route.query
    ? `/api/countries?${Object.keys(route.query)
        .map((key) => `${key}=${route.query[key]}`)
        .join('&')}`
    : '/api/countries'
  useFetch(url)
})
</script>
<template>
  <div class="py-8 lg:py-12 space-y-6 lg:space-y-12">
    <section aria-label="Search and filters" class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div></div>
      <div>
        <filters-regions />
      </div>
    </section>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-12 gap-6">
      <Card v-for="country in data" :key="country.name" :country="country" />
    </ul>
  </div>
</template>

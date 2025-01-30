<script setup>
const route = useRoute()
const url = route.query
  ? `/api/countries?${Object.keys(route.query)
      .map((key) => `${key}=${route.query[key]}`)
      .join('&')}`
  : '/api/countries'
const { data } = await useFetch(url)
</script>
<template>
  <div class="py-8 lg:py-12 space-y-6 lg:space-y-12">
    <ul class="grid lg:grid-cols-4 lg:gap-12 gap-6">
      <Card v-for="country in data" :key="country.name" :country="country" />
    </ul>
  </div>
</template>

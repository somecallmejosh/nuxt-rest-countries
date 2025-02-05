<script setup>
const route = useRoute()
const router = useRouter()
const { data: country } = await useFetch('/api/country/' + route.params.cca3)

const getNativeName = (names) => {
  const nativeName = names[route.params.cca3]
  return nativeName ? nativeName.official : Object.values(names)[0].official
}

const backLink = () => {
  const back = router.options.history.state.back
  if (back) {
    if (back.includes('?region')) {
      return back
    }
    return '/'
  }
  return '/'
}


useSeoMeta({
  title: () => country.value?.name?.common,
  description: () => `Information about ${country.value?.name?.common}`,
  ogDescription: () => `Information about ${country.value?.name?.common}`,
  ogImage: () => country.value?.flags?.png,
  twitterCard: 'summary_large_image',
})


</script>

<template>
  <div class="py-12 lg:py-20 space-y-12 lg:space-y-20">
    <div>
      <NuxtLink :to="backLink()" class="inline-flex gap-2">
        <icons-back-arrow />
        <span>Back</span>
      </NuxtLink>
    </div>
    <section class="grid gap-8 lg:grid-cols-2 lg:gap-32 lg:items-center">
      <div>
        <flag :imageUrl="country.flags.svg" :altText="`${country.name.common}`" context="country" />
      </div>
      <div>
        <h1 class="font-800 text-3xl mb-4">{{ country.name.common }}</h1>
        <div class="grid gap-6 lg:grid-cols-2">
          <dl>
            <div>
              <dt>Native Name</dt>
              <dd>{{ getNativeName(country.name.nativeName) }}</dd>
            </div>
            <div>
              <dt>Population</dt>
              <dd>{{ country.population.toLocaleString() }}</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>{{ country.region }}</dd>
            </div>
            <div>
              <dt>Sub region</dt>
              <dd>{{ country.subregion }}</dd>
            </div>
            <div>
              <dt>Capital</dt>
              <dd>
                {{ country.capital.length > 1
                  ? country.capital.join(', ')
                  : country.capital[0] }}
              </dd>
            </div>
          </dl>
          <dl>
            <div>
              <dt>Top Level Domain</dt>
              <dd>
              {{ country.tld.length > 1
                ? country.tld.join(', ')
                : country.tld[0] }}
            </dd>
            </div>
            <div>
              <dt>Currencies</dt>
              <dd>
                {{ Object.values(country.currencies).map(currency => `${currency.name}`).join(', ') }}
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                {{ Object.values(country.languages).join(', ') }}
              </dd>
            </div>
          </dl>
        </div>
        <div v-if="country.borderCountries.length" class="flex flex-col gap-3 lg:gap-4 lg:flex-row mt-20">
          <h2 class="font-600 shrink-0">Border Countries:</h2>
          <ul class="flex gap-x-2 gap-y-3 list-none flex-wrap flex-1">
            <li v-for="border in country.borderCountries" :key="border.cca3">
              <NuxtLink :to="`/country/${border.cca3}`">
                {{ border.name.common }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>

dl {
  @apply space-y-2
}
dl > div {
  @apply flex gap-1 text-sm lg:text-base;
}
dt {
  @apply font-600 shrink-0;
}
dt:after {
  content: ':';
}
dd {
  @apply font-300;
}

a {
  @apply bg-white dark:bg-ebony-clay dark:border-ebony-clay rounded-[0.125rem] px-6 py-1 text-sm font-300;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
}

</style>

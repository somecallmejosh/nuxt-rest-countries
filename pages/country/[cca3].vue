<script setup>
const route = useRoute()
const { data } = await useFetch('/api/country/' + route.params.cca3)

const getNativeName = (names) => {
  const nativeName = names[route.params.cca3]
  return nativeName ? nativeName.official : Object.values(names)[0].official
}
</script>

<template>
  <div class="py-12 lg:py-20 lg:space-y-20">
    <div>
      <NuxtLink to="/" class="inline-flex gap-2">
        <icons-back-arrow />
        <span>Back</span>
      </NuxtLink>
    </div>
    <section class="grid gap-8 lg:grid-cols-2 lg:gap-32 lg:items-center">
      <div>
        <flag :imageUrl="data.flags.svg" :altText="`${data.name.common}`" context="country" />
      </div>
      <div>
        <h1 class="font-800 text-3xl mb-4">{{ data.name.common }}</h1>
        <div class="grid gap-6 lg:grid-cols-2">
          <dl>
            <div>
              <dt>Native Name</dt>
              <dd>{{ getNativeName(data.name.nativeName) }}</dd>
            </div>
            <div>
              <dt>Population</dt>
              <dd>{{ data.population.toLocaleString() }}</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>{{ data.region }}</dd>
            </div>
            <div>
              <dt>Sub region</dt>
              <dd>{{ data.subregion }}</dd>
            </div>
            <div>
              <dt>Capital</dt>
              <dd>
                {{ data.capital.length > 1
                  ? data.capital.join(', ')
                  : data.capital[0] }}
              </dd>
            </div>
          </dl>
          <dl>
            <div>
              <dt>Top Level Domain</dt>
              <dd>
              {{ data.tld.length > 1
                ? data.tld.join(', ')
                : data.tld[0] }}
            </dd>
            </div>
            <div>
              <dt>Currencies</dt>
              <dd>
                {{ Object.values(data.currencies).map(currency => `${currency.name}`).join(', ') }}
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                {{ Object.values(data.languages).join(', ') }}
              </dd>
            </div>
          </dl>
        </div>
        <div v-if="data.borderCountries.length" class="flex flex-col gap-3 lg:gap-4 lg:flex-row mt-20">
          <h2 class="font-600 shrink-0">Border Countries:</h2>
          <ul class="flex gap-x-2 gap-y-3 list-none flex-wrap flex-1">
            <li v-for="border in data.borderCountries" :key="border.cca3">
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

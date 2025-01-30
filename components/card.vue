<script setup>
  const props = defineProps({
    country: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <li>
    <flag
      :imageUrl="props.country.flags.svg"
      :altText="`${props.country.name.common}`"
      context="card"
    />
    <div class="card-text">
      <h2 class="font-800 text-lg mb-4">{{ props.country.name.common }}</h2>
      <dl>
        <div>
          <dt>Population</dt>
          <dd>{{ props.country.population.toLocaleString() }}</dd>
        </div>
        <div>
          <dt>Region</dt>
          <dd>{{ props.country.region }}</dd>
        </div>
        <div>
          <dt>Capital</dt>
          <dd>
            {{ props.country.capital.length > 1
              ? props.country.capital.join(', ')
              : props.country.capital[0] }}
          </dd>
        </div>
      </dl>
    </div>
    <NuxtLink :to="`/country/${props.country.cca3}`">
      <div class="sr-only">{{ props.country.name }}</div>
    </NuxtLink>
  </li>
</template>
<style scoped>
li {
  @apply relative bg-white dark:bg-ebony-clay rounded-[0.3125rem];
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);

  a {
    @apply block absolute inset-0 z-10 rounded-[0.3125rem] overflow-hidden;
  }
}
.card-text {
  @apply relative z-0;
}

.card-text {
  @apply pt-6 px-6 pb-[2.87rem];
}

dl {
  @apply text-sm;

  div {
    @apply  flex items-center gap-1;
  }
  dt {
    @apply font-600;

    &:after {
      content: ':';
    }
  }

  dd {
    @apply font-300;
  }
}
</style>

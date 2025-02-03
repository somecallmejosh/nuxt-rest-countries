<script setup>
const route = useRoute()
import { OnClickOutside } from '@vueuse/components'
const { data: regions } = await useFetch('/api/regions')
const region = ref(route.query.region ? route.query.region : 'All')
const regionMenuVisible = ref(false)
function showRegions() {
  regionMenuVisible.value = true
}
function hideRegions() {
  regionMenuVisible.value = false
}
</script>
<template>
  <div class="relative inline-flex">
    <button @click="showRegions" class="box-shadow" aria-haspopup="true" aria-expanded="false" aria-controls="region-filter">
      <span>{{ region }}</span>
      <icons-chevron-down />
    </button>
    <OnClickOutside @trigger="hideRegions">
      <ul
        v-if="regionMenuVisible"
        id="region-filter"
        role="menu"
        tabindex="-1"
        class="bg-white box-shadow rounded-[0.3125rem] inline-flex flex-col absolute top-[3.2rem] left-0 z-20 px-[1.5rem] py-4 w-full text-sm" name="region-filter">
        <li v-for="region in regions" :key="region">
          <NuxtLink :to="'/?region=' + region" class="py-1 block">{{ region }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="py-1 block">All</NuxtLink>
        </li>
      </ul>
    </OnClickOutside>
  </div>
</template>
<style scoped>
button {
  @apply bg-white dark:bg-ebony-clay dark:border-ebony-clay rounded-[0.3125rem] h-[3rem] w-[12.5rem] pl-[1.5rem] pr-[1.19rem] flex items-center justify-between text-sm font-300;
}

.box-shadow {
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
</style>

<script setup>
const route = useRoute()
import { OnClickOutside } from '@vueuse/components'
import { watch } from 'vue'
const { data: regions } = await useFetch('/api/regions')
const region = ref(route.query.region ? route.query.region : 'Filter By Region')
const regionMenuVisible = ref(false)
function toggleRegionMenu() {
  regionMenuVisible.value = !regionMenuVisible.value
}
function hideRegions() {
  regionMenuVisible.value = false
}

watch(() => route.query.region, (newRegion) => {
  region.value = newRegion ? newRegion : 'All'
})
</script>
<template>
  <div class="relative inline-flex">
    <OnClickOutside @trigger="hideRegions">
      <button @click="toggleRegionMenu" class="box-shadow" aria-haspopup="true" aria-expanded="false" aria-controls="region-filter">
        <span>{{ region }}</span>
        <icons-chevron-down />
      </button>
      <ul
        v-if="regionMenuVisible"
        @click="hideRegions"
        id="region-filter"
        role="menu"
        tabindex="-1"
        class="bg-white box-shadow rounded-[0.3125rem] inline-flex flex-col absolute top-[3.2rem] left-0 z-20 px-[1.5rem] py-4 w-full text-sm dark:bg-ebony-clay" name="region-filter">
        <li v-for="item in regions" :key="item">
          <NuxtLink :to="'/?region=' + item"
          >
            {{ item }}
            <span v-if="item === region"><icons-back-arrow /></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="py-1 block">
            All
            <span v-if="region === 'All'"><icons-back-arrow /></span>
          </NuxtLink>
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
a {
  @apply -mx-4 px-4 rounded-[0.3125rem] py-1 flex items-center gap-1 justify-between;
}
a:hover, a:focus {
  @apply bg-ebony-clay/5 dark:bg-white/5;
}
</style>

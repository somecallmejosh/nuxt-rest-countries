<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>
<template>
  <div class="font-custom">
    <NuxtRouteAnnouncer />
    <div class="text-wood-smoke bg-alabaster dark:text-white dark:bg-mine-shaft min-h-dvh flex flex-col h-dvh">
      <layout-app-header />
      <main class="wrapper space-y-2 flex-1 flex flex-col items-center justify-center">
        <div class="bg-white p-4 rounded lg:min-w-96 space-y-6">
          <h1 class="font-800 text-[3rem]">{{ error.statusCode }}</h1>
          <div v-if="error.statusCode === 404">
            <p>Sorry, the page you are looking for could not be found.</p>
          </div>
          <div v-if="error.statusCode === 500">
            <p>Sorry, something went wrong on our end.</p>
          </div>
          <NuxtLink to="/" class="flex items-center justify-center gap-1 py-2 px-4 rounded-md border border-wood-smoke dark:border-mine-shaft">
            <icons-back-arrow />
            <span>Go back home</span>
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
main > div {
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
}
</style>

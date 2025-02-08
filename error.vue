<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({ statusCode: 500 }),
  },
})
</script>
<template>
  <div class="font-custom">
    <NuxtRouteAnnouncer />
    <div
      class="flex h-dvh min-h-dvh flex-col bg-alabaster text-wood-smoke dark:bg-mine-shaft dark:text-white"
    >
      <layout-app-header />
      <main
        class="wrapper flex flex-1 flex-col items-center justify-center space-y-2"
      >
        <div
          class="space-y-6 rounded bg-white p-4 dark:bg-ebony-clay lg:min-w-96"
        >
          <h1 class="text-[3rem] font-800">{{ error.statusCode }}</h1>
          <div v-if="error.statusCode === 404">
            <p>Sorry, the page you are looking for could not be found.</p>
          </div>
          <div v-if="error.statusCode === 500">
            <p>Sorry, something went wrong on our end.</p>
          </div>
          <NuxtLink
            to="/"
            class="flex items-center justify-center gap-1 rounded-md border border-wood-smoke px-4 py-2 dark:border-mine-shaft"
          >
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

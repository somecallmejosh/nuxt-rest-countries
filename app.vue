<template>
  <div class="font-custom">
    <NuxtRouteAnnouncer />
    <div
      class="flex min-h-dvh flex-col bg-alabaster text-wood-smoke dark:bg-mine-shaft dark:text-white"
    >
      <layout-app-header />
      <main class="wrapper flex-1">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<style>
.wrapper {
  @apply mx-auto w-full max-w-[80rem] px-4 xl:px-0;
}
</style>

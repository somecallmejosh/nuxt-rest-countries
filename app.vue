<template>
  <div class="font-custom ">
    <NuxtRouteAnnouncer />
    <div class="text-wood-smoke bg-alabaster dark:text-white dark:bg-mine-shaft min-h-dvh flex flex-col ">
      <layout-app-header />
      <main class="wrapper flex-1">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<style>
  .wrapper {
    @apply w-full max-w-[80rem] mx-auto px-4 lg:px-0;
  }
</style>

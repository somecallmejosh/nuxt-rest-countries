<script setup>
const colorMode = useColorMode()
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <div class="box-shadow flex items-center bg-white dark:bg-ebony-clay">
    <header class="wrapper flex h-20 items-center justify-between">
      <NuxtLink to="/" class="text-sm font-800 lg:text-2xl"
        >Where in the world?</NuxtLink
      >
      <button class="flex items-center space-x-2" @click="toggleDarkMode">
        <icons-moon />
        <span class="text-xs lg:text-base">Dark Mode</span>
      </button>
    </header>
  </div>
</template>
<style scoped>
.box-shadow {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}
</style>

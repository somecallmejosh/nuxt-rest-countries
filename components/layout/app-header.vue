<script setup>
  const colorMode = useColorMode()
  const toggleDarkMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
</script>
<template>
  <div class="box-shadow bg-white dark:bg-ebony-clay flex items-center">
    <header class="wrapper flex items-center justify-between h-20">
      <NuxtLink to="/" class="text-sm lg:text-2xl font-800">Where in the world?</NuxtLink>
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

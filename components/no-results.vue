<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  clearSearch: {
    type: Function,
    required: true
  }
})

</script>
<template>
  <div class="flex flex-col gap-2 lg:flex-row lg:items-center" role="alert" aria-live="assertive">
    <icons-oops class="size-28 lg:size-40 shrink-0"/>
    <div>
      <h1 class="font-800 text-3xl">Uhhh... Say What?</h1>
      <p>Is like... <strong class="bg-black/10 p-1 italic dark:bg-white/10">{{ props.name }}</strong> actually a country and stuff?</p>
      <p class="mb-2">Maybe give your search another go.</p>
      <button @click="props.clearSearch" class="bg-black/10 font-600 dark:bg-black dark:border-ebony-clay rounded-[0.3125rem] px-2 py-1 box-shadow">Clear Search</button>
    </div>
  </div>
</template>

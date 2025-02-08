<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  clearSearch: {
    type: Function,
    required: true,
  },
})
</script>
<template>
  <div
    class="flex flex-col gap-2 lg:flex-row lg:items-center"
    role="alert"
    aria-live="polite"
  >
    <icons-oops class="size-28 shrink-0 lg:size-40" />
    <div>
      <h1 class="text-3xl font-800">Uhhh... Say What?</h1>
      <p>
        Is like...
        <strong class="bg-black/10 p-1 italic dark:bg-white/10">{{
          props.name
        }}</strong>
        actually a country and stuff?
      </p>
      <p class="mb-2">Maybe give your search another go.</p>
      <button
        @click="props.clearSearch"
        class="box-shadow rounded-[0.3125rem] bg-black/10 px-2 py-1 font-600 dark:border-ebony-clay dark:bg-black"
      >
        Clear Search
      </button>
    </div>
  </div>
</template>

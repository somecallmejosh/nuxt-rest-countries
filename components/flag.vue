<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    default: 'card',
  },
  index: {
    type: Number,
    default: 0,
  },
})
</script>
<template>
  <div :class="props.context">
    <NuxtImg
      provider="flagCdn"
      :src="props.imageUrl"
      :alt="`${props.altText} Flag`"
      layout="fill"
      :loading="index > 1 ? 'lazy' : 'eager'"
    />
  </div>
</template>
<style scoped>
.card {
  @apply aspect-[16/10.5];

  img {
    @apply rounded-t-[0.3125rem];
  }
}
.country {
  @apply aspect-[35/25];

  img {
    @apply rounded-[0.62538rem];
  }
}

img {
  @apply h-full w-full object-cover;
}
</style>

<script setup>
const { data } = await useFetch('/api/countries')
</script>
<template>
  <div class="pt-8 lg:pt-12 space-y-6">
    <p>Coming Soon</p>

    <pre class="w-full max-w-full overflow-auto bg-black/10 rounded-lg p-6 ">
      <code class="block">
      {{  data }}
      </code>
    </pre>
  </div>
</template>

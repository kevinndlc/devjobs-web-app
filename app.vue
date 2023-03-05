<script setup lang="ts">
useHead({
  titleTemplate: '%s | DevJobs',
  meta: [
    {
      name: 'description',
      content: 'Find the best jobs in the world',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});
</script>

<template>
  <Body
    class="bg-light-grey dark:bg-midnight text-very-dark-blue dark:text-white transition-colors"
  />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

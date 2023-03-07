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
    class="font-kumbh bg-light-grey dark:bg-midnight text-very-dark-blue dark:text-white transition-colors"
  />

  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in'
    }" />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px)
}
</style>

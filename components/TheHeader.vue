<script setup lang="ts">
import screens from '#tailwind-config/theme/screens';
</script>

<template>
  <header class="relative">
    <picture class="absolute top-0 left-0 w-full">
      <source
        :media="`(min-width: ${screens.lg})`"
        srcset="/images/bg-pattern-header-desktop.svg"
      />
      <source
        :media="`(min-width: ${screens.sm})`"
        srcset="/images/bg-pattern-header-tablet.svg"
      />
      <img
        src="/images/bg-pattern-header-mobile.svg"
        alt="DevJobs background"
        class="w-full"
      />
    </picture>
    <div class="relative wrapper py-8 sm:py-11 lg: flex justify-between items-center">
      <img src="/logo.svg" alt="DevJobs logo" />
      <ThemeToggle />
    </div>
  </header>
</template>

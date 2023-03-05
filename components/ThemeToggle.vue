<script setup lang="ts">
const isDark = useDark();
</script>

<template>
  <label class="inline-flex items-center gap-4 cursor-pointer">
    <input
      type="checkbox"
      name="app-theme"
      id="app-theme"
      class="sr-only peer"
      v-model="isDark"
    />
    <IconSun />
    <div
      class="relative w-12 h-6 rounded-full transition-colors peer-focus-visible:ring-1 after:content=[''] after:absolute after:w-3.5 after:aspect-square after:bg-violet after:rounded-full after:top-[5px] after:left-[5px] after:transition-transform after:translate-x-0 peer-checked:after:translate-x-6 bg-white"
    />
    <IconMoon />
  </label>
</template>

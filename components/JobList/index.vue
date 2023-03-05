<script setup lang="ts">
import { Job } from '~/types';

defineProps<{
  jobs: Job[] | null;
  pending?: boolean;
}>()
</script>

<template>
  <ul class="job-container">
    <li v-for="job in jobs" :key="job.id">
      <JobListItem :job="job" @click="() => navigateTo(`/${job.id}`)" />
    </li>
  </ul>
</template>

<style scoped lang="postcss">
.job-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  
  @apply gap-y-[50px] sm:gap-y-16 gap-x-3 lg:gap-x-8
}
</style>
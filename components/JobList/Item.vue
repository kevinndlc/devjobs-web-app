<script setup lang="ts">
import { Job } from '~/types';

defineProps<{
  job: Job;
}>();
</script>

<template>
  <button class="relative group w-full text-left transition-all bg-white dark:bg-very-dark-blue rounded-md p-8 pt-[50px] focus:outline-none">
    <div class="absolute top-0 -translate-y-1/2 w-[50px] aspect-square rounded-[15px] flex items-center justify-center group-hover:scale-125 group-focus:scale-125 transition-transform" :style="{background: job.logoBackground}">
      <img :src="job.logo" />
    </div>
    <p class="text-dark-grey">{{ job.postedAt }} • {{ job.contract }}</p>
    <h2 class="my-4 text-lg font-bold">{{ job.position }}</h2>
    <h3 class="text-dark-grey mb-10">{{ job.company }}</h3>
    <strong class="text-sm text-violet">{{ job.location }}</strong>
  </button>
</template>
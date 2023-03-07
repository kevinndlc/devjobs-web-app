<script setup lang="ts">
import { Job } from '~/types';

useHead({
  title: 'Home',
});

const search = ref('');
const debouncedSearch = useDebounce(search, 500);

const locationSearch = ref('');
const debouncedLocationSearch = useDebounce(locationSearch, 500);

const fullTime = ref(false);

const jobs = ref<Job[] | null>(null)
const isLoading = ref(false);

async function fetchJobs() {
  isLoading.value = true;
  
  jobs.value = await $fetch('/api/jobs', {
    query: {
      search: search.value,
      location: locationSearch.value,
      fullTime: fullTime.value,
    },
  });

  isLoading.value = false;
}

onMounted(async () => await fetchJobs());
</script>

<template>
  <div>
    <SearchBar v-model:search="search" v-model:location="locationSearch" v-model:full-time="fullTime" @search="fetchJobs" />
    <JobList :jobs="jobs" :pending="isLoading" class="mt-14 sm:mt-[70px] lg:mt-[105px]" />
  </div>
</template>

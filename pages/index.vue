<script setup lang="ts">
useHead({
  title: 'Home',
});

const search = ref('');
const debouncedSearch = useDebounce(search, 500);

const locationSearch = ref('');
const debouncedLocationSearch = useDebounce(locationSearch, 500);

const { data, pending } = useLazyFetch('/api/jobs', {
  query: {
    search: debouncedSearch,
    location: debouncedLocationSearch,
  },
});
</script>

<template>
  <div>
    <SearchBar v-model:search="search" v-model:location="locationSearch" />
    <JobList :jobs="data" :pending="pending" class="mt-14 sm:mt-[70px] lg:mt-[105px]" />
  </div>
</template>

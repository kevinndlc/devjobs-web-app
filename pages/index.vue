<script setup lang="ts">
useHead({
  title: 'Home',
});

const search = ref('');
const debouncedSearch = useDebounce(search, 500);

const { data, pending } = useFetch('/api/jobs', {
  query: {
    search: debouncedSearch,
  },
});
</script>

<template>
  <div>
    <SearchBar v-model="search" />
    <JobList :jobs="data" :pending="pending" class="mt-14" />
  </div>
</template>

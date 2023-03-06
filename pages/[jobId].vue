<script setup lang="ts">
const { params } = useRoute();

const { data, pending } = useLazyFetch(`/api/jobs/${params.jobId}`);

watchEffect(() => {
  useHead({
    title: data.value?.position || 'Job Details',
  });
})


</script>

<template>
  <div>
    <pre v-if="data">{{ data }}</pre>
    <p v-else-if="pending">Loading...</p>
  </div>
</template>
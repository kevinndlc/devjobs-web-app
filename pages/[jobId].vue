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
  <section class="pb-24 sm:pb-32 max-w-[730px] w-full mx-auto">
    <template v-if="data">
      <header class="relative sm:h-[140px] bg-white dark:bg-very-dark-blue rounded-md p-8 sm:p-0 flex flex-col items-center text-center sm:text-left gap-6 sm:gap-0 pt-[50px] mb-6 sm:flex-row">
        <div class="absolute sm:hidden top-0 -translate-y-1/2 w-[50px] aspect-square rounded-[15px] flex items-center justify-center group-hover:scale-125 group-focus:scale-125 transition-transform" :style="{background: data.logoBackground}">
          <img :src="data.logo" />
        </div>
        <div class="hidden sm:flex items-center justify-center h-full aspect-square" :style="{background: data.logoBackground}">
          <img :src="data.logo" class="w-20" />
        </div>

        <div class="flex-1 flex flex-col gap-6 sm:flex-row justify-between sm:p-10 items-center">
          <div>
            <h1 class="mb-3 font-bold text-lg">{{ data.company }}</h1>
            <span class="text-dark-grey">{{ data.company.toLowerCase() }}.com</span>
          </div>
          <a :href="data.website" class="h-12 inline-flex items-center justify-center cursor-pointer px-5 lg:px-9 bg-violet dark:bg-white bg-opacity-10 dark:bg-opacity-10 text-violet dark:text-white rounded-[5px] hover:bg-opacity-[35%] focus:bg-opacity-[35%] dark:hover:bg-opacity-[35%] dark:focus:bg-opacity-[35%] transition-colors focus:outline-none">
            <strong>Company Site</strong>
          </a>
        </div>
      </header>

      <div class="relative bg-white dark:bg-very-dark-blue rounded-md px-6 py-10 sm:p-12">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-14">
          <div>
            <p class="text-dark-grey mb-2">{{ data.postedAt }} • {{ data.contract }}</p>
            <h2 class="text-lg font-bold mb-3 sm:text-[28px] sm:leading-[34px]">{{ data.position }}</h2>
            <strong class="text-sm text-violet">{{ data.location }}</strong>
          </div>
          <a :href="data.apply" class="flex h-12 justify-center items-center cursor-pointer bg-violet rounded-[5px] text-white hover:bg-light-violet focus:bg-light-violet transition-colors focus:outline-none w-full font-bold sm:w-fit px-7">Apply now</a>
        </div>
        <p class="mt-8 text-dark-grey dark:text-grey">{{ data.description }}</p>

        <h3 class="font-bold text-lg mt-16 mb-7">Requirements</h3>
        <p class="text-dark-grey dark:text-grey">{{ data.requirements.content }}</p>
        <ul class="mt-8 flex flex-col gap-2 list-disc marker:text-violet pl-5">
          <li v-for="item in data.requirements.items" :key="item" class="pl-5">
            <p class="text-dark-grey dark:text-grey">{{ item }}</p>
          </li>
        </ul>

        <h3 class="font-bold text-lg mt-10 mb-6">What You Will Do</h3>
        <p class="text-dark-grey dark:text-grey mb-8">{{ data.requirements.content }}</p>
        <ol class="mt-8 flex flex-col gap-2 list-decimal marker:text-violet pl-5 marker:font-bold">
          <li v-for="item in data.requirements.items" :key="item" class="pl-5">
            <p class="text-dark-grey dark:text-grey">{{ item }}</p>
          </li>
        </ol>
      </div>

      <footer class="p-6 border-t border-midnight bg-white dark:bg-very-dark-blue fixed bottom-0 left-0 w-full flex justify-between items-center">
        <div class="hidden sm:block">
          <h3 class="font-bold text-lg mb-3">{{ data.position }}</h3>
          <p class="text-dark-grey">So Digital Inc.</p>
        </div>
        <a :href="data.apply" class="inline-flex shrink-0 items-center justify-center h-12 bg-violet rounded-[5px] text-white hover:bg-light-violet focus:bg-light-violet transition-colors focus:outline-none w-full sm:w-fit font-bold px-7 cursor-pointer">Apply now</a>
      </footer>
    </template>
    <LoadingSpinner v-else-if="pending">Loading...</LoadingSpinner>
  </section>
</template>
<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const props = defineProps<{
  search?: string;
  location?: string;
}>();

const emit = defineEmits<{
  (e: 'update:search', value: string): void;
  (e: 'update:location', value: string): void;
}>();

const searchModel = computed({
  get: () => props.search ?? '',
  set: (value) => emit('update:search', value),
});

const locationModel = computed({
  get: () => props.location ?? '',
  set: (value) => emit('update:location', value),
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktopOrWider = breakpoints.greaterOrEqual('lg');

const showFilterModal = ref(false);
</script>

<template>
  <div
    class="h-20 bg-white dark:bg-very-dark-blue transition-colors rounded-md overflow-hidden flex items-center pr-4"
  >
    <div class="relative h-full flex-grow-[2]">
      <IconSearch class="hidden sm:block absolute top-1/2 left-6 -translate-y-1/2 text-violet pointer-events-none" />
      <input
        type="text"
        name="search"
        id="search"
        :placeholder="isDesktopOrWider ? 'Filter by title, companies, expertise...' : 'Filter by title...'"
        class="h-full focus:outline-none border-none pl-6 sm:pl-16 bg-transparent w-full"
        autocomplete="off"
        v-model="searchModel"
      />
    </div>
    <div class="relative hidden sm:block h-full flex-grow border-x border-dark-grey/20">
      <IconLocation class="absolute top-1/2 left-6 -translate-y-1/2 text-violet pointer-events-none" />
      <input
        type="text"
        name="location-search"
        id="location-search"
        placeholder="Filter by location..."
        class="h-full outline-none ring-0 border-none pl-6 sm:pl-14 bg-transparent w-full"
        autocomplete="off"
        v-model="locationModel"
      />
    </div>
    <div class="h-full flex items-center shrink-0">
      <label class="group ml-5 hidden sm:inline font-bold cursor-pointer">
        <input type="checkbox" class="w-6 h-6 /10 bg-very-dark-blue/10 dark:bg-white/10 group-hover:bg-light-violet/25 checked:!bg-violet group-hover:checked:bg-violet transition-colors rounded-[3px] border-none mr-4  cursor-pointer" />
        Full time<span class="hidden lg:inline"> Only</span>
      </label>
      <button class="sm:hidden" @click="showFilterModal = true">
        <IconFilter class="text-dark-grey dark:text-white" />
      </button>
      <button class="h-12 ml-6 sm:ml-7 px-3.5 lg:px-9 bg-violet rounded-[5px] text-white">
        <IconSearch class="sm:hidden" />
        <strong class="hidden sm:inline">Search</strong>
      </button>
    </div>

    <FilterModal :show="showFilterModal" @close="showFilterModal = false" />
  </div>
</template>

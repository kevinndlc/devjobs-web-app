<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const model = computed({
  get: () => props.modelValue ?? '',
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <div
    class="h-20 bg-white dark:bg-very-dark-blue transition-colors rounded-md overflow-hidden flex items-center pr-4"
  >
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Filter by title..."
      class="h-full flex-1 focus:outline-none pl-6 bg-transparent"
      autocomplete="off"
      v-model="model"
    />
    <button>
      <IconFilter class="text-dark-grey dark:text-white" />
    </button>
    <button class="ml-6 p-3.5 bg-violet rounded-[5px]">
      <IconSearch />
    </button>
  </div>
</template>

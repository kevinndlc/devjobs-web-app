<script setup lang="ts">
defineProps<{
  show: boolean;
}>()

const emit = defineEmits<{
  (e: 'close'): void;
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 bg-very-dark-blue/20 flex items-center" @click="emit('close')">
      <div class="wrapper bg-white rounded-md" @click.stop>
        <div class="relative h-[72px]">
          <IconLocation class="absolute top-1/2 left-6 -translate-y-1/2 text-violet pointer-events-none" />
          <input
            type="text"
            name="location-search"
            id="location-search"
            placeholder="Filter by location..."
            class="h-full outline-none ring-0 border-none pl-14 pr-6 bg-transparent w-full"
            autocomplete="off"
          />
        </div>
        <hr class="border-dark-grey/20">
        <div class="p-6">
          <label class="group font-bold cursor-pointer">
          <input type="checkbox" class="w-6 h-6 /10 bg-very-dark-blue/10 dark:bg-white/10 group-hover:bg-light-violet/25 checked:!bg-violet group-hover:checked:bg-violet transition-colors rounded-[3px] border-none mr-4  cursor-pointer" />
          Full time Only
        </label>
        </div>
      </div>
    </div>
  </Teleport>
</template>
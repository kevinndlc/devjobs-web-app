<script setup lang="ts">
defineProps<{
  show: boolean;
  location: string;
  fullTime: boolean;
}>()

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'search'): void;
  (e: 'update:location', value: string): void;
  (e: 'update:fullTime', value: boolean): void;
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 bg-very-dark-blue/70 flex items-center" @click="emit('close')">
        <div class="wrapper bg-white rounded-md text-very-dark-blue" @click.stop>
          <div class="relative h-[72px]">
            <IconLocation class="absolute top-1/2 left-6 -translate-y-1/2 text-violet pointer-events-none" />
            <input
              type="text"
              name="location-search"
              id="location-search"
              placeholder="Filter by location..."
              class="h-full outline-none ring-0 border-none pl-14 pr-6 bg-transparent w-full"
              autocomplete="off"
              :value="location"
              @input="emit('update:location', ($event.target as HTMLInputElement).value)"
            />
          </div>
          <hr class="border-dark-grey/20">
          <div class="p-6">
            <label class="group font-bold cursor-pointer">
              <input type="checkbox" class="w-6 h-6 /10 bg-very-dark-blue/10  group-hover:bg-light-violet/25 checked:!bg-violet group-hover:checked:bg-violet transition-colors rounded-[3px] border-none mr-4  cursor-pointer" :value="fullTime" @change="emit('update:fullTime', !fullTime)" />
              Full time Only
            </label>
            <button class="block mt-6 w-full h-12 bg-violet rounded-[5px] text-white font-bold hover:bg-light-violet focus:bg-light-violet transition-colors focus:outline-none" @click="() => {
              emit('search')
              emit('close')
            }">
              Search
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
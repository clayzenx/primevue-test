<script setup lang="ts">
const selectedCities = ref([])
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])

function closeAll() {
  selectedCities.value = []
}
</script>

<template>
  <div class="flex gap-2">
    <MultiSelect
      v-model="selectedCities"
      display="chip"
      :options="cities"
      option-label="name"
      placeholder="Select Cities"
      :max-selected-labels="3"
      class="w-full md:w-20rem"
    />
    <Button
      v-if="selectedCities.length"
      icon="pi pi-times-circle"
      text
      rounded
      aria-label="close all"
      @click="closeAll"
    />
  </div>
</template>

<script setup lang="ts">
import { FilterMatchMode } from 'primevue/api'
import apiString from '~/apiString'

const r = apiString
  .split(/\[/)
  .map(str => str.split(/\] /))
  .slice(1)
  .map(([time, desc]) => ({ time, desc }))

const data = ref(r)
const columns = ref([
  { field: 'time', header: 'Time' },
  { field: 'desc', header: 'Description' },
])
const selectedColumns = ref(columns.value)
const inputSearch = ref('')
const filters = computed(() => ({
  global: { value: inputSearch.value, matchMode: FilterMatchMode.CONTAINS },
}))
function onToggle(val) {
  selectedColumns.value = columns.value.filter(col => val.includes(col))
}
</script>

<template>
  <DataTable v-model:filters="filters" :value="data" table-style="min-width: 25rem">
    <template #header>
      <div class="flex gap-2">
        <MultiSelect
          placeholder="Select Columns"
          :model-value="selectedColumns"
          :options="columns"
          option-label="header"
          display="chip"
          @update:model-value="onToggle"
        />
        <span class="p-input-icon-left w-[20%]">
          <i class="pi pi-search" />
          <InputText v-model="inputSearch" placeholder="Searh" />
        </span>
      </div>
    </template>
    <Column
      v-for="(col, index) of selectedColumns"
      :key="`${col.field}_${index}`"
      :field="col.field"
      :header="col.header"
    />
  </DataTable>
</template>

<script setup>
import { ProductService } from '@/service/ProductService'

const columns = ref([
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
])
const selectedColumns = ref(columns.value)
const products = ref()
onMounted(() => {
  ProductService.getProductsMini().then(data => products.value = data)
})
function onToggle(val) {
  selectedColumns.value = columns.value.filter(col => val.includes(col))
}
</script>

<template>
  <div>
    <DataTable :value="products" table-style="min-width: 50rem">
      <template #header>
        <div style="text-align:left">
          <MultiSelect
            placeholder="Select Columns"
            :model-value="selectedColumns"
            :options="columns"
            option-label="header"
            display="chip"
            @update:model-value="onToggle"
          />
        </div>
      </template>
      <Column field="code" header="Code" />
      <Column v-for="(col, index) of selectedColumns" :key="`${col.field}_${index}`" :field="col.field" :header="col.header" />
    </DataTable>
  </div>
</template>

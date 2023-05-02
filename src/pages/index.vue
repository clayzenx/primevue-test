<script setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <div class="card justify-content-center flex">
    <InputText v-model="value" type="text" />
  </div>
</template>

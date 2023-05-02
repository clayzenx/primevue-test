<script setup>
import { fetchTitle } from '~/utils/fetchTitle'

const inputLink = ref(null)
const href = ref(null)
const isLoading = ref(false)
const isDisabled = ref(false)

async function blurHandler() {
  if (!inputLink.value)
    return
  isLoading.value = true
  const title = await fetchTitle(inputLink.value)
  if (title) {
    href.value = String(inputLink.value)
    inputLink.value = title
    isDisabled.value = true
  }
  isLoading.value = false
}
function edit() {
  inputLink.value = String(href.value)
  isDisabled.value = false
  href.value = null
}
const loaderClass = computed(() => {
  if (isLoading.value)
    return 'pi pi-spin pi-spinner'
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span class="p-input-icon-right">
        <i :class="loaderClass" />
        <InputText
          v-model="inputLink"
          placeholder="https://"
          :disabled="isDisabled"
          type="text"
          @blur="blurHandler()"
        />
      </span>
      <i v-if="isDisabled" class="pi pi-pencil cursor-pointer" @click="edit" />
    </div>
    <a v-if="href" :href="href">{{ inputLink }}</a>
  </div>
</template>

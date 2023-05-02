<script setup>
const time = ref(null)
const timeFormated = computed(() => {
  const t = new Date(time.value)
  const h = t.getHours()
  const hours = h >= 10 ? h : `0${h}`
  const m = t.getMinutes()
  const minutes = m >= 10 ? m : `0${m}`
  return `${hours}:${minutes}`
})
</script>

<template>
  <em v-if="time">{{ timeFormated }}</em>
  <Calendar
    id="calendar-timeonly"
    v-model="time"
    placeholder="00:00"
    time-only
    show-icon
  />
</template>

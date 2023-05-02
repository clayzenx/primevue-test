<script setup>
const prime = usePrimeVue()

const darkModel = computed({
  get() { return isDark.value },
  set(_v) {
    toggleDark()
    prime.changeTheme(`soho-${isDark.value ? 'dark' : 'light'}`, `soho-${isDark.value ? 'light' : 'dark'}`, 'prime')
  },
})
</script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <ToggleButton
      v-model="darkModel"
      on-label="Night"
      off-label="Light"
      on-icon="i-carbon-moon"
      off-icon="i-carbon-sun"
    />

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>

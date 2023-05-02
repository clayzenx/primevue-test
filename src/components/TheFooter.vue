<script setup>
const prime = usePrimeVue()

function toggleTheme() {
  toggleDark()
  prime.changeTheme(`soho-${isDark.value ? 'dark' : 'light'}`, `soho-${isDark.value ? 'light' : 'dark'}`, 'prime')
}
</script>

<template>
  <nav mt-6 inline-flex items-center gap-2 text-xl>
    <Button
      :icon="isDark ? 'i-carbon-moon' : 'i-carbon-sun'"
      text
      rounded
      aria-label="Theme"
      @click="toggleTheme()"
    />

    <a
      rel="noreferrer"
      href="https://github.com/clayzenx/primevue-test"
      target="_blank"
      title="GitHub"
    >
      <Button
        icon="i-carbon-logo-github"
        text
        rounded
        aria-label="Source"
      />
    </a>
  </nav>
</template>

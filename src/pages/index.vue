<template>
  <div class="flex justify-center">
    <Card>
      <template #content>
        <div class="flex flex-col gap-2">
          <!-- 1 -->
          <InputLink />

          <!-- 2 -->
          <InputTime />

          <!-- 3 -->
          <MultiSelector />

          <!-- 4, 5 -->
          <ApiTable />
        </div>
      </template>
    </Card>
  </div>
</template>

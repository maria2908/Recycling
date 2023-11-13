<template>
  <div>
    <q-btn dense flat color="blue-grey-8" @click="$q.dark.toggle()">
      <template v-if="$q.dark.isActive">
        <img src="@/assets/img/mode-light.svg" height="20" alt="Light Mode">
      </template>
      <template v-else>
        <img src="@/assets/img/mode-dark.svg" height="20" alt="Dark Mode">
      </template>
    </q-btn>
  </div>
</template>
<script setup>
</script>
<template>
  <div class="container mx-16 mx-auto py-16" style="width: 40%;">
    <slot></slot>
  </div>
</template>
<script setup>
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 70% !important;
  }

}
</style>